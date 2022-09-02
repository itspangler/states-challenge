// The towns object
let towns = [
  {
    "name": "abington"
  },
  {
    "name": "acton"
  },
  {
    "name": "acushnet"
  },
  {
    "name": "adams"
  },
  {
    "name": "agawam"
  },
  {
    "name": "alford"
  },
  {
    "name": "amesbury"
  },
  {
    "name": "amherst"
  },
  {
    "name": "andover"
  },
  {
    "name": "aquinnah"
  },
  {
    "name": "arlington"
  },
  {
    "name": "ashburnham"
  },
  {
    "name": "ashby"
  },
  {
    "name": "ashfield"
  },
  {
    "name": "ashland"
  },
  {
    "name": "athol"
  },
  {
    "name": "attleboro"
  },
  {
    "name": "auburn"
  },
  {
    "name": "avon"
  },
  {
    "name": "ayer"
  },
  {
    "name": "barnstable"
  },
  {
    "name": "barre"
  },
  {
    "name": "becket"
  },
  {
    "name": "bedford"
  },
  {
    "name": "belchertown"
  },
  {
    "name": "bellingham"
  },
  {
    "name": "belmont"
  },
  {
    "name": "berkley"
  },
  {
    "name": "berlin"
  },
  {
    "name": "bernardston"
  },
  {
    "name": "beverly"
  },
  {
    "name": "billerica"
  },
  {
    "name": "blackstone"
  },
  {
    "name": "blandford"
  },
  {
    "name": "bolton"
  },
  {
    "name": "boston"
  },
  {
    "name": "bourne"
  },
  {
    "name": "boxborough"
  },
  {
    "name": "boxford"
  },
  {
    "name": "boylston"
  },
  {
    "name": "braintree"
  },
  {
    "name": "brewster"
  },
  {
    "name": "bridgewater"
  },
  {
    "name": "brighton"
  },
  {
    "name": "brimfield"
  },
  {
    "name": "brockton"
  },
  {
    "name": "brookfield"
  },
  {
    "name": "brookline"
  },
  {
    "name": "buckland"
  },
  {
    "name": "burlington"
  },
  {
    "name": "cambridge"
  },
  {
    "name": "canton"
  },
  {
    "name": "carlisle"
  },
  {
    "name": "carver"
  },
  {
    "name": "charlemont"
  },
  {
    "name": "charlestown"
  },
  {
    "name": "charlton"
  },
  {
    "name": "chatham"
  },
  {
    "name": "chelmsford"
  },
  {
    "name": "chelsea"
  },
  {
    "name": "cheshire"
  },
  {
    "name": "chester"
  },
  {
    "name": "chesterfield"
  },
  {
    "name": "chicopee"
  },
  {
    "name": "chilmark"
  },
  {
    "name": "clarksburg"
  },
  {
    "name": "clinton"
  },
  {
    "name": "cohasset"
  },
  {
    "name": "colrain"
  },
  {
    "name": "concord"
  },
  {
    "name": "conway"
  },
  {
    "name": "cummington"
  },
  {
    "name": "dalton"
  },
  {
    "name": "dana"
  },
  {
    "name": "danvers"
  },
  {
    "name": "dartmouth"
  },
  {
    "name": "dedham"
  },
  {
    "name": "deerfield"
  },
  {
    "name": "dennis"
  },
  {
    "name": "dighton"
  },
  {
    "name": "douglas"
  },
  {
    "name": "dorchester"
  },
  {
    "name": "dover"
  },
  {
    "name": "dracut"
  },
  {
    "name": "dudley"
  },
  {
    "name": "dunstable"
  },
  {
    "name": "duxbury"
  },
  {
    "name": "east bridgewater"
  },
  {
    "name": "east brookfield"
  },
  {
    "name": "east longmeadow"
  },
  {
    "name": "eastham"
  },
  {
    "name": "easthampton"
  },
  {
    "name": "easton"
  },
  {
    "name": "edgartown"
  },
  {
    "name": "egremont"
  },
  {
    "name": "enfield"
  },
  {
    "name": "erving"
  },
  {
    "name": "essex"
  },
  {
    "name": "everett"
  },
  {
    "name": "fairhaven"
  },
  {
    "name": "fall river"
  },
  {
    "name": "falmouth"
  },
  {
    "name": "fitchburg"
  },
  {
    "name": "florida"
  },
  {
    "name": "foxborough"
  },
  {
    "name": "framingham"
  },
  {
    "name": "franklin"
  },
  {
    "name": "freetown"
  },
  {
    "name": "gardner"
  },
  {
    "name": "georgetown"
  },
  {
    "name": "gill"
  },
  {
    "name": "gloucester"
  },
  {
    "name": "goshen"
  },
  {
    "name": "gosnold"
  },
  {
    "name": "grafton"
  },
  {
    "name": "granby"
  },
  {
    "name": "granville"
  },
  {
    "name": "great barrington"
  },
  {
    "name": "greenfield"
  },
  {
    "name": "greenwich"
  },
  {
    "name": "groton"
  },
  {
    "name": "groveland"
  },
  {
    "name": "hadley"
  },
  {
    "name": "halifax"
  },
  {
    "name": "hamilton"
  },
  {
    "name": "hampden"
  },
  {
    "name": "hancock"
  },
  {
    "name": "hanover"
  },
  {
    "name": "hanson"
  },
  {
    "name": "hardwick"
  },
  {
    "name": "harvard"
  },
  {
    "name": "harwich"
  },
  {
    "name": "hatfield"
  },
  {
    "name": "haverhill"
  },
  {
    "name": "hawley"
  },
  {
    "name": "heath"
  },
  {
    "name": "hingham"
  },
  {
    "name": "hinsdale"
  },
  {
    "name": "holbrook"
  },
  {
    "name": "holden"
  },
  {
    "name": "holland"
  },
  {
    "name": "holliston"
  },
  {
    "name": "holyoke"
  },
  {
    "name": "hopedale"
  },
  {
    "name": "hopkinton"
  },
  {
    "name": "hubbardston"
  },
  {
    "name": "hudson"
  },
  {
    "name": "hull"
  },
  {
    "name": "huntington"
  },
  {
    "name": "hyde park"
  },
  {
    "name": "ipswich"
  },
  {
    "name": "kingston"
  },
  {
    "name": "lakeville"
  },
  {
    "name": "lancaster"
  },
  {
    "name": "lanesborough"
  },
  {
    "name": "lawrence"
  },
  {
    "name": "lee"
  },
  {
    "name": "leicester"
  },
  {
    "name": "lenox"
  },
  {
    "name": "leominster"
  },
  {
    "name": "leverett"
  },
  {
    "name": "lexington"
  },
  {
    "name": "leyden"
  },
  {
    "name": "lincoln"
  },
  {
    "name": "littleton"
  },
  {
    "name": "longmeadow"
  },
  {
    "name": "lowell"
  },
  {
    "name": "ludlow"
  },
  {
    "name": "lunenburg"
  },
  {
    "name": "lynn"
  },
  {
    "name": "lynnfield"
  },
  {
    "name": "malden"
  },
  {
    "name": "manchester-by-the-sea"
  },
  {
    "name": "mansfield"
  },
  {
    "name": "marblehead"
  },
  {
    "name": "marion"
  },
  {
    "name": "marlborough"
  },
  {
    "name": "marshfield"
  },
  {
    "name": "mashpee"
  },
  {
    "name": "mattapoisett"
  },
  {
    "name": "maynard"
  },
  {
    "name": "medfield"
  },
  {
    "name": "medford"
  },
  {
    "name": "medway"
  },
  {
    "name": "melrose"
  },
  {
    "name": "mendon"
  },
  {
    "name": "merrimac"
  },
  {
    "name": "methuen"
  },
  {
    "name": "middleborough"
  },
  {
    "name": "middlefield"
  },
  {
    "name": "middleton"
  },
  {
    "name": "milford"
  },
  {
    "name": "millbury"
  },
  {
    "name": "millis"
  },
  {
    "name": "millville"
  },
  {
    "name": "milton"
  },
  {
    "name": "monroe"
  },
  {
    "name": "monson"
  },
  {
    "name": "montague"
  },
  {
    "name": "monterey"
  },
  {
    "name": "montgomery"
  },
  {
    "name": "mount washington"
  },
  {
    "name": "nahant"
  },
  {
    "name": "nantucket"
  },
  {
    "name": "natick"
  },
  {
    "name": "needham"
  },
  {
    "name": "new ashford"
  },
  {
    "name": "new bedford"
  },
  {
    "name": "new braintree"
  },
  {
    "name": "new marlborough"
  },
  {
    "name": "new salem"
  },
  {
    "name": "newbury"
  },
  {
    "name": "newburyport"
  },
  {
    "name": "newton"
  },
  {
    "name": "norfolk"
  },
  {
    "name": "north adams"
  },
  {
    "name": "north andover"
  },
  {
    "name": "north attleborough"
  },
  {
    "name": "north brookfield"
  },
  {
    "name": "north reading"
  },
  {
    "name": "northampton"
  },
  {
    "name": "northborough"
  },
  {
    "name": "northbridge"
  },
  {
    "name": "northfield"
  },
  {
    "name": "norton"
  },
  {
    "name": "norwell"
  },
  {
    "name": "norwood"
  },
  {
    "name": "oak bluffs"
  },
  {
    "name": "oakham"
  },
  {
    "name": "orange"
  },
  {
    "name": "orleans"
  },
  {
    "name": "otis"
  },
  {
    "name": "oxford"
  },
  {
    "name": "palmer"
  },
  {
    "name": "paxton"
  },
  {
    "name": "peabody"
  },
  {
    "name": "pelham"
  },
  {
    "name": "pembroke"
  },
  {
    "name": "pepperell"
  },
  {
    "name": "peru"
  },
  {
    "name": "petersham"
  },
  {
    "name": "phillipston"
  },
  {
    "name": "pittsfield"
  },
  {
    "name": "plainfield"
  },
  {
    "name": "plainville"
  },
  {
    "name": "plymouth"
  },
  {
    "name": "plympton"
  },
  {
    "name": "prescott"
  },
  {
    "name": "princeton"
  },
  {
    "name": "provincetown"
  },
  {
    "name": "quincy"
  },
  {
    "name": "randolph"
  },
  {
    "name": "raynham"
  },
  {
    "name": "reading"
  },
  {
    "name": "rehoboth"
  },
  {
    "name": "revere"
  },
  {
    "name": "richmond"
  },
  {
    "name": "rochester"
  },
  {
    "name": "rockland"
  },
  {
    "name": "rockport"
  },
  {
    "name": "rowe"
  },
  {
    "name": "rowley"
  },
  {
    "name": "roxbury"
  },
  {
    "name": "royalston"
  },
  {
    "name": "russell"
  },
  {
    "name": "rutland"
  },
  {
    "name": "salem"
  },
  {
    "name": "salisbury"
  },
  {
    "name": "sandisfield"
  },
  {
    "name": "sandwich"
  },
  {
    "name": "saugus"
  },
  {
    "name": "savoy"
  },
  {
    "name": "scituate"
  },
  {
    "name": "seekonk"
  },
  {
    "name": "sharon"
  },
  {
    "name": "sheffield"
  },
  {
    "name": "shelburne"
  },
  {
    "name": "sherborn"
  },
  {
    "name": "shirley"
  },
  {
    "name": "shrewsbury"
  },
  {
    "name": "shutesbury"
  },
  {
    "name": "somerset"
  },
  {
    "name": "somerville"
  },
  {
    "name": "south hadley"
  },
  {
    "name": "southampton"
  },
  {
    "name": "southborough"
  },
  {
    "name": "southbridge"
  },
  {
    "name": "southwick"
  },
  {
    "name": "spencer"
  },
  {
    "name": "springfield"
  },
  {
    "name": "sterling"
  },
  {
    "name": "stockbridge"
  },
  {
    "name": "stoneham"
  },
  {
    "name": "stoughton"
  },
  {
    "name": "stow"
  },
  {
    "name": "sturbridge"
  },
  {
    "name": "sudbury"
  },
  {
    "name": "sunderland"
  },
  {
    "name": "sutton"
  },
  {
    "name": "swampscott"
  },
  {
    "name": "swansea"
  },
  {
    "name": "taunton"
  },
  {
    "name": "templeton"
  },
  {
    "name": "tewksbury"
  },
  {
    "name": "tisbury"
  },
  {
    "name": "tolland"
  },
  {
    "name": "topsfield"
  },
  {
    "name": "townsend"
  },
  {
    "name": "truro"
  },
  {
    "name": "tyngsborough"
  },
  {
    "name": "tyringham"
  },
  {
    "name": "upton"
  },
  {
    "name": "uxbridge"
  },
  {
    "name": "wakefield"
  },
  {
    "name": "wales"
  },
  {
    "name": "walpole"
  },
  {
    "name": "waltham"
  },
  {
    "name": "ware"
  },
  {
    "name": "wareham"
  },
  {
    "name": "warren"
  },
  {
    "name": "warwick"
  },
  {
    "name": "washington"
  },
  {
    "name": "watertown"
  },
  {
    "name": "wayland"
  },
  {
    "name": "webster"
  },
  {
    "name": "wellesley"
  },
  {
    "name": "wellfleet"
  },
  {
    "name": "wendell"
  },
  {
    "name": "wenham"
  },
  {
    "name": "west boylston"
  },
  {
    "name": "west bridgewater"
  },
  {
    "name": "west brookfield"
  },
  {
    "name": "west newbury"
  },
  {
    "name": "west roxbury"
  },
  {
    "name": "west springfield"
  },
  {
    "name": "west stockbridge"
  },
  {
    "name": "west tisbury"
  },
  {
    "name": "westborough"
  },
  {
    "name": "westfield"
  },
  {
    "name": "westford"
  },
  {
    "name": "westhampton"
  },
  {
    "name": "westminster"
  },
  {
    "name": "weston"
  },
  {
    "name": "westport"
  },
  {
    "name": "westwood"
  },
  {
    "name": "weymouth"
  },
  {
    "name": "whately"
  },
  {
    "name": "whitman"
  },
  {
    "name": "wilbraham"
  },
  {
    "name": "williamsburg"
  },
  {
    "name": "williamstown"
  },
  {
    "name": "wilmington"
  },
  {
    "name": "winchendon"
  },
  {
    "name": "winchester"
  },
  {
    "name": "windsor"
  },
  {
    "name": "winthrop"
  },
  {
    "name": "woburn"
  },
  {
    "name": "worcester"
  },
  {
    "name": "worthington"
  },
  {
    "name": "wrentham"
  },
  {
    "name": "yarmouth"
  }
];

// Get the relevant elements
let input = document.querySelector('#town-name');
let btn = document.querySelector('#btn');
let listContainer = document.querySelector('.list-container');
let correctList = document.querySelector('#correct-list');
let score = document.querySelector('#score');
let form = document.querySelector('#form');

// Set up empty array and count variable
let previousCorrect = [];
let count = 0;

function gettownMap (name) {
  $.ajax({
    url: "https://collections.leventhalmap.org/search.json?per_page=100&q=" + name + "&search_field=exemplary_image_ss",
    type:"Get",
    dataType: "json",
    success:function(response){
        let mapImg = document.querySelector('.map');
        let mapsLabel = document.querySelector('.mapsLabel');
        let totalResults = response.response.docs.length;
        let randomImg = Math.floor(Math.random() * totalResults);
        let urlSmall = "https://iiif.digitalcommonwealth.org/iiif/2/" + response.response.docs[randomImg].exemplary_image_ssi + "/full/!600,600/0/default.jpg";
        let url = "https://iiif.digitalcommonwealth.org/iiif/2/" + response.response.docs[randomImg].exemplary_image_ssi + "/full/full/0/default.jpg";
        mapImg.src = urlSmall;
        let id = response.response.docs[randomImg].exemplary_image_ssi;
        let mapName = response.response.docs[randomImg].title_info_alternative_tsim
        console.log(response.response)
        backlink = "https://collections.leventhalmap.org/search/" + response.response.docs[randomImg].exemplary_image_ssi

        // Capitalise the first letter of each word
        let wordsName = name.split(' ');

        for (let i = 0; i < wordsName.length; i++) {
          wordsName[i] = wordsName[i][0].toUpperCase() + wordsName[i].substr(1);
        }

        nameCapitalised = wordsName.join(' ');

        mapsLabel.textContent = nameCapitalised + ' is correct!';

        correctList.innerHTML += `<li><a href="${url}" target="_blank">${nameCapitalised}</a></li>`;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert('Oops! something went wrong!');
    }
  });
}


function checktown () {
  let townGuess = input.value.toLowerCase();
  let townCorrect;

  // If there is currently a notice on the page, remove it
  let notice = document.querySelector('#notice');

  if (notice) {
    notice.remove();
  }

  // Check the guessed name against the towns object
  towns.forEach(function (town, i) {
    if (townGuess === town.name) {
      townCorrect = townGuess;
      townIsCorrect(townCorrect);
    }
    // console.log(previousCorrect);
  })

  // If the town doesn't match, provide a notice
  if (!townCorrect) {

    // Create a notification
    let notice = document.createElement('div');
    notice.setAttribute('id', 'notice');
    notice.setAttribute('aria-live', 'polite');
    notice.setAttribute('class', 'notice-style');

    // Inject it into the DOM
    form.append(notice);

    let notices = document.querySelectorAll('#notice').length;
    // console.log(notices);

    // Add text after it's in the UI
    setTimeout(function () {
      if (notices > 1) {
        return;
      }

      notice.textContent = 'That is not a town - try again!';
      notices--;
    }, 1);

    input.value = '';
  }

  // Clear form value
  input.value = '';
}

function townIsCorrect (townCorrect) {
  if (!previousCorrect.includes(townCorrect)) {
    // Add original, lowercase string to array
    previousCorrect.push(townCorrect);

    // Call the function to get an image - with townCorrect as the input
    gettownMap(townCorrect);

    // Add to count and display new score
    count++;
    score.innerHTML = `${count}/361`;
  } else {

    // Create a notification
    let notice = document.createElement('div');
    notice.setAttribute('id', 'notice');
    notice.setAttribute('aria-live', 'polite');
    notice.setAttribute('class', 'notice-style');

    notice.style.padding = '16px 0';

    // Inject it into the DOM
    form.append(notice);

    let notices = document.querySelectorAll('#notice').length;
    // console.log(notices);

    // Add text after it's in the UI
    setTimeout(function () {
      if (notices > 1) {
        return;
      }

      notice.textContent = 'You have already named that town - try again!';
      notices--;
    }, 1);
  }
}


// Listen for DOM events
btn.addEventListener('click', checktown);
