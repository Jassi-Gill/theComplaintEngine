const useState = (initialValue) => {
  let state = initialValue;
  const setState = (newState) => {
    state = newState;
  };
  return [state, setState];
};

const useEffect = (callback, dependencies) => {
  callback();
};

function ComplaintPage() {
  const [complaintType, setComplaintType] = useState('');
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [inputPhotoLink, setInputPhotoLink] = useState('');
  const [selectedOptionImages, setSelectedOptionImages] = useState({});
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Update selected option when radio button changes
  };

  useEffect(() => {
    const inputFields = document.querySelectorAll('.input-container input');

    inputFields.forEach(input => {
      const handleFocus = () => {
        input.nextElementSibling.classList.add('active');
      };

      const handleBlur = () => {
        if (!input.value.trim()) {
          input.nextElementSibling.classList.remove('active');
        }
      };

      const handleInput = () => {
        if (input.value.trim()) {
          input.nextElementSibling.classList.add('active');
        } else {
          input.nextElementSibling.classList.remove('active');
        }
      };

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
      input.addEventListener('input', handleInput);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.removeEventListener('input', handleInput);
      };
    });
  }, []);

  const handleComplaintTypeChange = (e) => {
    const selectedValue = e.target.value;
    setComplaintType(selectedValue);
  
    const complaintOptions = {
      'Electrical': {
        'Cabin fan': { name: 'Cabin fan', imagePath: './cabin Fan.jpg' },
        'Ceiling Fan': { name: 'Ceiling Fan', imagePath: './Ceiling FAn.jpg' },
        'Stand fan': { name: 'Stand fan', imagePath: './Stand Fan.jpg' },
        'LIGHT': { name: 'LIGHT' },
        'Fan Regulator': { name: 'Fan Regulator' },
        'Exhaust Fan-Round Type': { name: 'Exhaust Fan-Round Type', imagePath: './exh fan round.jpg' },
        'Exhaust Fan-Square Type': { name: 'Exhaust Fan-Square Type', imagePath: './exhaust fan crompton.jpg' },
        'Socket': { name: 'Socket', imagePath: './socket.jpg' },
        'Switch': { name: 'Switch', imagePath: './switch.jpg' }
      },
      'Plumbing': {
        'Toilet faucet/JetSpray': { name: 'Toilet faucet/JetSpray' },
        'Toilet cistern / flushing': { name: 'Toilet cistern / flushing', imagePath: './cistern.jpg' },
        'Toilet Seat Cover': { name: 'Toilet Seat Cover' },
        'Water Tap': { name: 'Water Tap' },
        'Water Leakage/ Drain clogged': { name: 'Water Leakage/ Drain clogged' }
      },
      'Civil': {
        'Wall/Floor etc.': { name: 'Wall/Floor etc.' }
      },
      'Others': {
        'Air Conditioner': { name: 'Air Conditioner' },
        'Elevator/ Lift': { name: 'Elevator/ Lift' },
        'Cleaning/Hygiene': { name: 'Cleaning/Hygiene' },
        'Security Services': { name: 'Security Services' },
        'Hostel TV related': { name: 'Hostel TV related' }
      }
    };
  
    // Clear the previous additional options
    setAdditionalOptions([]);
  
    // Update the additional options if the selected value exists in the complaintOptions
    if (selectedValue in complaintOptions) {
      const selectedOptions = complaintOptions[selectedValue];
      setAdditionalOptions(Object.keys(selectedOptions));
      setSelectedOptionImages(selectedOptions);
    }
  };
  
  

  const handleButtonClick = () => {
    setPhotoLink(inputPhotoLink);
    console.log(photoLink);
  };

  const handleInputChange = (e) => {
    setInputPhotoLink(e.target.value);
  };
  


  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-image');
  const backgroundImage = document.createElement('img');
  backgroundImage.src = './10136775_17973908.jpg';
  backgroundImage.alt = 'BackGround Image';
  backgroundDiv.appendChild(backgroundImage);
  app.appendChild(backgroundDiv);

  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');
  const heading = document.createElement('h1');
  heading.textContent = 'New Complaint';
  headingDiv.appendChild(heading);
  app.appendChild(headingDiv);

  rooms.forEach(room => {
    const roomDiv = document.createElement('div');
    roomDiv.textContent = room.name;
    app.appendChild(roomDiv);
  });

  const form = document.createElement('form');
  const formDiv = document.createElement('div');
  formDiv.classList.add('Form');
  form.appendChild(formDiv);

  const fullNameInput = createInput('text', 'Name', 'Enter FULL NAME');
  formDiv.appendChild(fullNameInput);

  const emailInput = createInput('text', 'Email', 'Enter College e-mail Id');
  formDiv.appendChild(emailInput);

  const smallBox1 = createSmallBox();
  formDiv.appendChild(smallBox1);

  const rollNoInput = createInput('number', 'RollNo.', 'Enter Roll no.');
  smallBox1.appendChild(rollNoInput);

  const batchSelect = createSelect('batch', ['2025', '2026', '2027', '2028']);
  smallBox1.appendChild(batchSelect);

  const smallBox2 = createSmallBox();
  formDiv.appendChild(smallBox2);

  const roomNoInput = createInput('number', 'room no.', 'Enter room no.');
  smallBox2.appendChild(roomNoInput);

  const areaSelect = createSelect('Area', ['Boys\' Hostel', 'Girls\' Hostel', 'Faculty Residence (T1/T2)', 'Admin Building', 'Academic Building', 'Security Barrack']);
  smallBox2.appendChild(areaSelect);

  const complaintTypeSelect = document.createElement('select');
  complaintTypeSelect.name = 'complaintType';
  complaintTypeSelect.addEventListener('change', handleComplaintTypeChange);
  const complaintTypes = ['Select', 'Electrical', 'Plumbing', 'Civil', 'Mess', 'Others'];
  complaintTypes.forEach(complaintType => {
  const option = document.createElement('option');
  option.value = complaintType; // Set both value and text content to the complaint type
  option.textContent = complaintType;
  complaintTypeSelect.appendChild(option);
});

  formDiv.appendChild(complaintTypeSelect);

  const additionalOptionsDiv = document.createElement('div');
  formDiv.appendChild(additionalOptionsDiv);

  const briefDescInput = createInput('text', 'brief-desc', 'Enter a brief description');
  formDiv.appendChild(briefDescInput);

  const photoLinkInput = createInput('text', 'photo-link', 'Upload photo link');
  photoLinkInput.value = inputPhotoLink;
  photoLinkInput.addEventListener('input', handleInputChange);
  formDiv.appendChild(photoLinkInput);

  const uploadButton = document.createElement('button');
  uploadButton.type = 'button';
  uploadButton.textContent = 'Upload⤴️';
  uploadButton.addEventListener('click', handleButtonClick);
  formDiv.appendChild(uploadButton);

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  formDiv.appendChild(submitButton);

  form.appendChild(formDiv);
  app.appendChild(form);

  function createInput(type, name, placeholder) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    return input;
  }

  function createSelect(name, options) {
    const select = document.createElement('select');
    select.name = name;
    options.forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      select.appendChild(option);
    });
    return select;
  }

  function createSmallBox() {
    const smallBox = document.createElement('div');
    smallBox.classList.add('small_box');
    return smallBox;
  }
}

ComplaintPage();
