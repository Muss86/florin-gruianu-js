// DOM Content Loaded:
// document.addEventListener('DOMContentLoaded')

// bad and deprecated:
// $(document).ready(function () {});

// note the overloading
$(function () {
  const $personForm = $('#personForm').on('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const person = {
      skills: [],
      hasPets: false,
      pets: [],
      friends: [],
    };

    for (const fieldData of formData.entries()) {
      const [fieldName, fieldValue] = fieldData;

      if (fieldName.startsWith('skill-')) {
        person.skills.push(fieldValue);

        continue;
      }

      if (fieldName === 'hasPets') {
        person.hasPets = true;

        continue;
      }

      if (fieldName.startsWith('pet-')) {
        // destructuring
        // Twix|Dog|12 -> ['Twix', 'Dog', '12']
        const [petName, petSpecies, petAge] = fieldValue.split('|');

        person.pets.push({
          petName,
          petSpecies,
          petAge: Number(petAge),
        });

        continue;
      }

      if (fieldName.startsWith('friend-')) {
        const [friendName, friendSurname, friendAge] = fieldValue.split('|');

        person.friends.push({
          friendName,
          friendSurname,
          friendAge: Number(friendAge),
        });

        continue;
      }

      if (fieldName === 'age') {
        person[fieldName] = Number(fieldValue);

        continue;
      }

      person[fieldName] = fieldValue;
    }

    $('.personDetails').remove();

    const $personContainer = renderPerson(person);
    $personContainer.insertAfter($personForm);

    resetForm($personForm);
    $('#personForm .skillsUl').remove();
  });

  const $skillInput = $('#skillInput');
  // nextSiblingElement -> DOM
  $skillInput.next().on('click', function () {
    // nu avem nevoie de event in cazul type="button"
    const $skillButton = $(this);
    const $skillInput = $skillButton.prev();
    const skillName = $skillInput.val().trim(); // .value <- proprietate in DOM

    //  '      a '.trim => 'a'
    if (skillName.length <= 0) {
      return;
    }

    // DOM -> parentElement
    const $parentFieldset = $skillButton.parent();
    let $skillsUl = $parentFieldset.find('.skillsUl');

    // runs only once
    if ($skillsUl.length === 0) {
      // create skills ul
      $skillsUl = $('<ul>', {
        class: 'skillsUl',
      });

      // jquery event delegation
      $skillsUl.on('click', '.deleteSkillButton', function () {
        // this -> deleteSkillButton
        $(this).parent().remove();
      });

      $skillsUl.on('click', '.editSkillButton', function () {
        const $editButton = $(this).hide();

        $editButton.siblings('input[name^="skill-"]').attr('type', 'text');
        $editButton.siblings('.skillName').hide();
        $editButton.siblings('.deleteSkillButton').hide();
        $editButton.siblings('.saveSkillButton').show();
        $editButton.siblings('.cancelEditButton').show();
      });

      $skillsUl.on('click', '.cancelEditButton', function () {
        const $cancelEditButton = $(this).hide();

        $cancelEditButton
          .siblings('input[name^="skill-"]')
          .attr('type', 'hidden');
        $cancelEditButton.siblings('.skillName').show();
        $cancelEditButton.siblings('.saveSkillButton').hide();
        $cancelEditButton.siblings('.deleteSkillButton').show();
        $cancelEditButton.siblings('.editSkillButton').show();
      });

      $skillsUl.on('click', '.saveSkillButton', function () {
        const $saveSkillButton = $(this).hide();

        const newValue = $saveSkillButton
          .siblings('input[name^="skill-"]')
          .attr('type', 'hidden')
          .val();

        $saveSkillButton.siblings('.skillName').text(newValue).show();
        $saveSkillButton.siblings('.saveSkillButton').hide();
        $saveSkillButton.siblings('.deleteSkillButton').show();
        $saveSkillButton.siblings('.editSkillButton').show();
        $saveSkillButton.siblings('.cancelEditButton').hide();
      });

      $skillsUl.appendTo($parentFieldset);
    }

    const $skillLi = $('<li>');

    $('<span>', {
      class: 'skillName',
      text: skillName,
    }).appendTo($skillLi);

    const $skillHiddenInput = $('<input>', {
      type: 'hidden',
      name: `skill-${skillName}`, // skill-HTML
      value: skillName,
    });

    // add input to li
    $skillLi.append($skillHiddenInput);

    // add delete button
    $('<button>', {
      type: 'button',
      text: '-',
      class: 'deleteSkillButton',
    }).appendTo($skillLi);

    // add edit button
    $('<button>', {
      type: 'button',
      text: 'Edit',
      class: 'editSkillButton',
    }).appendTo($skillLi);

    // add save button
    $('<button>', {
      type: 'button',
      text: 'save',
      class: 'saveSkillButton',
    })
      .hide()
      .appendTo($skillLi);

    // add cancel button
    $('<button>', {
      type: 'button',
      text: 'Cancel',
      class: 'cancelEditButton',
    })
      .hide()
      .appendTo($skillLi);

    // the real DOM operation
    $skillsUl.append($skillLi);

    // empty original element
    $skillInput.val('');
  });

  $('#hasPets').on('click', function () {
    const $checkBox = $(this);
    const isChecked = $checkBox.prop('checked');
    const $targetFieldset = $checkBox.parent().next();

    if (isChecked === true) {
      // open pet fieldset
      $targetFieldset.fadeIn();
    } else {
      // close pet fieldset
      $targetFieldset.fadeOut();
    }
  });

  // bad V - internationalizare
  const $addPetButton = $('button[title="Add pet"]');
  $addPetButton.on('click', function () {
    const $addPetButton = $(this);
    const $petInputs = $addPetButton.siblings('input[name^="pet"]');
    const petDataArray = [];

    $petInputs.each(function () {
      const $petInput = $(this);
      const value = $petInput.val();

      // early return
      if (value.length <= 0) {
        return;
      }

      petDataArray.push(value);
    });

    if (petDataArray.length < 3) {
      return;
    }

    const petData = petDataArray.join('|');

    let $petUl = $('.petUl');

    if ($petUl.length <= 0) {
      $petUl = $('<ul>', {
        class: 'petUl',
      });
      // add to dom
      $petUl.insertAfter($addPetButton);

      $petUl.on('click', '.deletePetButton', function () {
        $(this).parent().remove();
      });
    }

    $petLi = $('<li>');
    $('<span>', {
      class: 'petDataDisplay',
      text: petData.replaceAll('|', ' '),
    }).appendTo($petLi);

    $('<input>', {
      class: 'petData',
      value: petData,
      type: 'hidden',
      name: `pet-${petData}`,
    }).appendTo($petLi);

    $('<button>', {
      class: 'deletePetButton',
      type: 'button',
      text: 'Delete pet',
    }).appendTo($petLi);

    // add $petLi to ul
    $petUl.append($petLi);

    $petInputs.val('');
  });

  const $addFriendButton = $('button[title="Add friend"]');
  $addFriendButton.on('click', function () {
    const $addFriendButton = $(this);
    const $friendInputs = $addFriendButton.siblings('input[name^="friend"]');
    const friendDataArray = [];

    $friendInputs.each(function () {
      const $friendInput = $(this);
      const value = $friendInput.val();

      if (value.length <= 0) {
        return;
      }

      friendDataArray.push(value);
    });

    if (friendDataArray.length < 3) {
      return;
    }

    const friendData = friendDataArray.join('|');

    let $friendUl = $('.friendUl');

    if ($friendUl.length <= 0) {
      $friendUl = $('<ul>', {
        class: 'friendUl',
      });

      // add to DOM
      $friendUl.insertAfter($addFriendButton);

      $friendUl.on('click', '.deleteFriendButton', function () {
        $(this).parent().remove();
      });
    }

    $friendLi = $('<li>');
    $('<span>', {
      class: 'friendDataDisplay',
      text: friendData.replaceAll('|', ' '),
    }).appendTo($friendLi);

    $('<input>', {
      class: 'friendData',
      value: friendData,
      type: 'hidden',
      name: `friend-${friendData}`,
    }).appendTo($friendLi);

    $('<button>', {
      class: 'deleteFriendButton',
      type: 'button',
      text: 'Delete friend',
    }).appendTo($friendLi);

    // add $friendLi to $friendUl
    $friendUl.append($friendLi);

    $friendInputs.val('');
  });

  // hoisting
  function renderPerson(person) {
    const $personContainer = $('<article>', {
      class: 'personDetails',
    });

    $('<h1>', {
      text: `${person.name} ${person.surname}`,
    }).appendTo($personContainer);

    $('<p>', {
      text: `Varsta: ${person.age}`,
    }).appendTo($personContainer);

    if (person.skills.length > 0) {
      const $skillsUl = renderSkillsUl(person.skills);

      $personContainer.append($skillsUl);
    }

    if (person.pets.length > 0) {
      const $petsUl = renderPetsUl(person.pets);

      $personContainer
        .append(
          $('<h2>', {
            text: 'Pets',
          }),
        )
        .append($petsUl);
    }

    if (person.friends.length > 0) {
      const $friendUl = renderFriendUl(person.friends);

      $personContainer
        .append(
          $('<h2>', {
            text: 'Friends',
          }),
        )
        .append($friendUl);
    }

    return $personContainer;
  }

  function renderSkillsUl(skillsArray) {
    const $skillsUl = $('<ul>');

    skillsArray.forEach(function (skillName) {
      $('<li>', {
        text: skillName,
      }).appendTo($skillsUl);
    });

    return $skillsUl;
  }

  function renderPetsUl(petsArray) {
    const $petsUl = $('<ul>');

    for (let i = 0; i < petsArray.length; i++) {
      const { petName, petAge, petSpecies } = petsArray[i];

      $('<li>', {
        text: `${petName}: ${petAge}: ${petSpecies}`,
      }).appendTo($petsUl);
    }

    return $petsUl;
  }

  function renderFriendUl(friendArray) {
    const $friendsUl = $('<ul>');

    for (let i = 0; i < friendArray.length; i++) {
      const { friendName, friendSurname, friendAge } = friendArray[i];

      $('<li>', {
        text: `${friendName} ${friendSurname} ${friendAge}`,
      }).appendTo($friendsUl);
    }

    return $friendsUl;
  }

  function resetForm($form) {
    const $namedInputs = $form.find('[name]');

    $namedInputs.each(function () {
      // in function functions, this = the DOM element
      const $input = $(this);

      $input.val('');
    });
  }
});
