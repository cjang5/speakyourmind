const intro = document.querySelector('div.intro');
const prelim = document.querySelector('div.prelim');
const letter = document.querySelector('div.letter');
const final = document.querySelector('div.final');

window.onload = function () {
  intro.style.opacity = 1;
}

const firstName = document.querySelector('form.address div.firstName input#firstName');
const middleName = document.querySelector('form.address div.middleName input#middleName');
const lastName = document.querySelector('form.address div.lastName input#lastName');
const line1 = document.querySelector('form.address div.line1 input#line1');
const line2 = document.querySelector('form.address div.line2 input#line2');
const city  = document.querySelector('form.address div.city input#city');
const state = document.querySelector('form.address div.state input#state');
const zipcode = document.querySelector('form.address div.zipcode input#zipcode');

firstName.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

middleName.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

lastName.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

line1.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

line2.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

city.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

state.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

zipcode.onkeypress = function (event) {
  if (event.keyCode === 13 && firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('button#search').click();
  }
};

document.querySelector('button#getstarted').onclick = function () {
  intro.style.opacity = 0;
  prelim.style.display = 'block';
  window.setTimeout(function () {
    intro.style.display = 'none';
    prelim.style.opacity = 1;
    firstName.focus();
  }, 500);
};

firstName.onblur = function () {
  if (firstName.value === '') {
    firstName.focus();
  }
};

lastName.onblur = function () {
  if (lastName.value === '') {
    lastName.focus();
  }
};

line1.onblur = function () {
  if (line1.value === '') {
    line1.focus();
  }
};

city.onblur = function () {
  if (city.value === '') {
    city.focus();
  }
};

state.onblur = function () {
  if (state.value === '') {
    state.focus();
  }
};

zipcode.onblur = function () {
  if (zipcode.value === '') {
    zipcode.focus();
  }
};

firstName.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};

lastName.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};

line1.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};
line2.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};
city.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};
state.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};
zipcode.oninput = function () {
  if (firstName.value.length > 0 && lastName.value.length > 0 && line1.value.length > 0 && city.value.length > 0 && state.value.length > 0 && zipcode.value.length > 0) {
    document.querySelector('div.prelim button#search').disabled = false;
    document.querySelector('div.prelim button#search').classList.remove('disabled');
  }
};

const notification = document.querySelector('div.notification');
const notifBody = document.querySelector('div.notification div.body');

document.querySelector('div.notification div.title a#x-notif').onclick = function () {
  notification.style.opacity = 0;
  window.setTimeout(function () {
    notification.style.display = 'none';
  }, 500);
};

const GOOGLE_API_URL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';

let req1, req2, req3, req4;

const gatherLegislators = function (type, req) {
  document.querySelector('button#search span').style.opacity = 0;
  document.querySelector('button#search img#spinner').style.opacity = 1;

  // decide on what params based on 'type'
  let params = '';
  switch (type) {
    case 'GOVERNOR':
      params = '&levels=administrativeArea1&roles=headOfGovernment&fields=officials%2C+normalizedInput';
      break;
    case 'DEPUTY_GOVERNOR':
      params = '&levels=administrativeArea1&roles=deputyHeadOfGovernment&fields=officials%2C+normalizedInput';
      break;
    case 'HOUSE_REPS':
      params = '&roles=legislatorLowerBody&fields=offices%2C+officials%2C+normalizedInput';
      break;
    case 'SENATORS':
      params = '&roles=legislatorUpperBody&fields=offices%2C+officials%2C+normalizedInput';
      break;
  }

  const address = encodeURIComponent(line1.value + " " + line2.value + " " + city.value + " " + state.value + " " + zipcode.value);
  req.onreadystatechange = function () {
    try {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200 || req.status === 304) {
          console.log(req.response);
          if (type == 'HOUSE_REPS') {
            prelim.style.opacity = 0;
            letter.style.display = 'block';
            window.setTimeout(function () {
              prelim.style.display = 'none';
              letter.style.opacity = 1;
            }, 500);
            document.querySelector('button#search span').style.opacity = 1;
            document.querySelector('button#search img#spinner').style.opacity = 0;
            document.querySelector('div.notification div.title a#x-notif').click();
          }
          parseResponse(type, JSON.parse(req.response));
        } else {
          const error = JSON.parse(req.response);
          notifBody.innerHTML = "Google Civic API ERROR " + error.error.code + ": " + error.error.message;
          notification.style.display = 'block';
          window.setTimeout(function () {
            notification.style.opacity = 1;
          }, 100);
        }
      }
    } catch (e) {
      console.log("Caught exception" + e.description);
    }
  };
  req.open('GET', GOOGLE_API_URL + address + params + '&key=' + API_KEY_GOOGLE, true);
  req.send(null);
};

const ul = document.querySelector('ul.rep-list');
const parseResponse = function (type, res) {
  SENDER.address_line1 = res.normalizedInput.line1;
  SENDER.address_city = res.normalizedInput.city;
  SENDER.address_state = res.normalizedInput.state;
  SENDER.address_zip = res.normalizedInput.zip;

  let li;
  if (type == 'GOVERNOR' || type == 'DEPUTY_GOVERNOR') {
    let official = res.officials[0];
    appendRep(official.name, type == 'GOVERNOR' ? 'Governor' : 'Lt. Governor', JSON.stringify(official.address[0]));
  } else if (type == 'SENATORS') {
    for (let office of res.offices) {
      for (let official_idx of office.officialIndices) {
        let official = res.officials[official_idx];
        appendRep(official.name, office.name == 'United States Senate' ? 'US Senator' : 'State Senator', JSON.stringify(official.address[0]));
      }
    }
  } else { // HOUSE REPS
    for (let office of res.offices) {
      // US HOUSE REPS
      if (office.levels[0] == 'country') {
        for (let official_idx of office.officialIndices) {
          let official = res.officials[official_idx];
          appendRep(official.name, 'US House Rep', JSON.stringify(official.address[0]));
        }
      } else {
        for (let official_idx of office.officialIndices) {
          let official = res.officials[official_idx];
          appendRep(official.name, 'State House Rep', JSON.stringify(official.address[0]));
        }
      }
    }
  }
};

const appendRep = function (name, role, address) {
  let li = document.createElement('li');
  li.setAttribute('class', 'rep-item');
  li.setAttribute('name', name);
  li.setAttribute('address', address);
  li.setAttribute('role', role);
  let spanName = document.createElement('span'),
      spanRole = document.createElement('span');
  spanName.setAttribute('id', 'name');
  spanRole.setAttribute('id', 'role');
  spanName.innerHTML = name;
  spanRole.innerHTML = role;
  li.appendChild(spanName);
  li.appendChild(spanRole);
  ul.appendChild(li);
  li.onmousedown = pickRep;
};

let SENDER = {
  name: '',
  address_line1: '',
  address_line2: '',
  address_city: '',
  address_state: '',
  address_zip: '',
  address_country: 'US'
}

document.querySelector('div.prelim button#search').onclick = function (event) {
  event.preventDefault();

  // Store sender information
  SENDER.name = firstName.value + (middleName.value.length > 0 ? ' ' + middleName.value : '') + ' ' + lastName.value;
  SENDER.address_line2 = line2.value;

  req1 = new XMLHttpRequest();
  gatherLegislators('GOVERNOR', req1);
  req2 = new XMLHttpRequest();
  gatherLegislators('DEPUTY_GOVERNOR', req2);
  req3 = new XMLHttpRequest();
  gatherLegislators('SENATORS', req3);
  req4 = new XMLHttpRequest();
  gatherLegislators('HOUSE_REPS', req4);
};

const dropdownSelect = document.querySelector('button.dropdown-select');

dropdownSelect.onclick = function () {
  document.querySelector('div.dropdown-items').style.display = 'block';
};

dropdownSelect.onblur = function () {
  document.querySelector('div.dropdown-items').style.display = 'none';
};

let RECIPIENT = {
  name: '',
  address_line1: '',
  address_line2: '',
  address_city: '',
  address_state: '',
  address_zip: '',
  address_country: 'US'
};

const pickRep = function () {
  document.querySelector('img#chevron').style.display = 'none';
  RECIPIENT.name = this.getAttribute('name');
  const address = JSON.parse(this.getAttribute('address'));
  RECIPIENT.address_line1 = address.line1;
  if (!!address.line2) RECIPIENT.address_line2 = address.line2;
  RECIPIENT.address_city = address.city;
  RECIPIENT.address_state = address.state;
  RECIPIENT.address_zip = address.zip;

  document.querySelector('button.dropdown-select span#placeholder').innerHTML = '';
  document.querySelector('button.dropdown-select span#name').innerHTML = RECIPIENT.name;
  document.querySelector('button.dropdown-select span#role').innerHTML = this.getAttribute('role');
  dropdownSelect.classList.add('active');
  window.setTimeout(function () {
    textarea.classList.remove('disabled');
    textarea.removeAttribute('disabled');
    textarea.focus();
  }, 100);
};

const textarea = document.querySelector('div.textarea textarea'),
      wordCount = document.querySelector('div.letter p.wordCount');

textarea.oninput = function () {
  if (textarea.value.length === 0) {
    document.querySelector('button#send').classList.add('disabled');
    document.querySelector('button#send').disabled = true;
    return;
  }
  document.querySelector('button#send').classList.remove('disabled');
  document.querySelector('button#send').disabled = false;
  const count = this.value.match(/\S+/g).length;
  wordCount.innerHTML = count + (count == 1 ? ' word' : ' words');
}

textarea.onkeydown = function () {
  if (textarea.value.length === 0)
    wordCount.innerHTML = '0 words';
}

textarea.onkeyup = function () {
  if (textarea.value.length === 0)
    wordCount.innerHTML = '0 words';
}

document.querySelector('button#send').onclick = function (event) {
  event.preventDefault();

  document.querySelector('button#send img#spinner').style.opacity = 1;
  document.querySelector('button#send span').style.opacity = 0;

  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          const res = JSON.parse(httpRequest.response);
          console.log(httpRequest.response);
          letter.style.opacity = 0;
          final.style.display = 'block';
          window.setTimeout(function () {
            letter.style.display = 'none';
            final.style.opacity = 1;
          }, 500);
          document.querySelector('button#send span').style.opacity = 1;
          document.querySelector('button#send img#spinner').style.opacity = 0;
          document.querySelector('span#recipient').innerHTML = res.to.name;
          document.querySelector('span#expectedDate').innerHTML = res.expected_delivery_date;
          document.querySelector('div.final a#viewLetter').setAttribute('href', res.url);
        } else {
          const error = JSON.parse(httpRequest.response);
          notifBody.innerHTML = "Lob API ERROR " + error.error.status_code + ": " + error.error.message;
          notification.style.display = 'block';
          window.setTimeout(function () {
            notification.style.opacity = 1;
          }, 100);
        }
      }
    } catch (e) {
      console.log("Caught exception" + e.description);
    }
  };
  httpRequest.open('POST', 'https://api.lob.com/v1/letters');
  let params = JSON.stringify({
    "to": JSON.stringify(RECIPIENT),
    "from": JSON.stringify(SENDER),
    "color": false,
    "file": "<html style='padding-top: 3in; margin: .5in;'>" + textarea.value.replace(/\n/g, '<br>') + "</html>"
  });
  httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.setRequestHeader('Authorization', 'Basic ' + btoa(API_KEY_LOB + ':'));
  httpRequest.send(params);
}

const resetValues = function () {
  firstName.value = '';
  middleName.value = '';
  lastName.value = '';
  line1.value = '';
  line2.value = '';
  city.value = '';
  state.value = '';
  zipcode.value = '';
};

const reset = function (event) {
  event.preventDefault();
  final.style.opacity = 0;
  letter.style.opacity = 0;
  prelim.style.display = 'block';
  resetValues();
  window.setTimeout(function () {
    final.style.display = 'none';
    letter.style.display = 'none';
    prelim.style.opacity = 1;
  }, 500);
  firstName.focus();
  document.querySelector('button.dropdown-select span#placeholder').innerHTML = 'Select your desired representative';
  document.querySelector('button.dropdown-select span#name').innerHTML = '';
  document.querySelector('button.dropdown-select span#role').innerHTML = '';
  textarea.value = '';
  dropdownSelect.classList.remove('active');
  window.setTimeout(function () {
    textarea.classList.add('disabled');
    textarea.setAttribute('disabled', true);
  }, 100);
  wordCount.innerHTML = '0 words';
  document.querySelector('button#send').disabled = true;
  document.querySelector('button#send').classList.add('disabled');
  document.querySelector('div.prelim button#search').disabled = true;
  document.querySelector('div.prelim button#search').classList.add('disabled');
  ul.innerHTML = '';
  document.querySelector('img#chevron').style.display = 'block';
};

document.querySelector('div.final a#newLetter').onclick = reset;
document.querySelector('a#startOver').onclick = reset;
