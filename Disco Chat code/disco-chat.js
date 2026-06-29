// ============================================================
//  DISCO ELYSIUM — STREAMELEMENTS CHAT OVERLAY
//  Only shows messages from users who redeemed the reward
// ============================================================

var BASE        = 'https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Disco%20Chat/';
var FONT_URL    = 'https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Sina%20Nova%20W01%20Regular.ttf';
var REWARD_NAME = 'Disco Chat'; // must match your channel point reward name exactly

var discoUsers    = {};
var totalMessages = 0;
var hideAfter     = 20;
var ignoredUsers  = ['streamelements'];

var TEXTBOX_URL   = BASE + 'Disco%20Text%20Box/Disco%20Text%20box.png';
var BORDER_URL    = BASE + 'Portrait%20Border/Portrait%20border.png';

var CONTINUE_BARS = {
  Intellect: BASE + 'Continue%20Bar/Intellect%20Continue.png',
  Motorics:  BASE + 'Continue%20Bar/Motorics%20Continue.png',
  Physique:  BASE + 'Continue%20Bar/Physique%20Continue.png',
  Psyche:    BASE + 'Continue%20Bar/Psyche%20Continue.png',
  default:   BASE + 'Continue%20Bar/Continue.png'
};

var SKILLS = [
  { name: 'CONCEPTUALIZATION',    category: 'Intellect', url: BASE + 'Intellect/Portrait_conceptualization_rank1.webp' },
  { name: 'DRAMA',                category: 'Intellect', url: BASE + 'Intellect/Portrait_drama_rank1.webp' },
  { name: 'ENCYCLOPEDIA',         category: 'Intellect', url: BASE + 'Intellect/Portrait_encyclopedia.webp' },
  { name: 'LOGIC',                category: 'Intellect', url: BASE + 'Intellect/Portrait_logic.webp' },
  { name: 'RHETORIC',             category: 'Intellect', url: BASE + 'Intellect/Portrait_rhetoric.webp' },
  { name: 'VISUAL CALCULUS',      category: 'Intellect', url: BASE + 'Intellect/Portrait_visual-calculus_rank1.webp' },
  { name: 'COMPOSURE',            category: 'Motorics',  url: BASE + 'Motorics/Portrait_composure.webp' },
  { name: 'HAND/EYE COORDINATION',category: 'Motorics',  url: BASE + 'Motorics/Portrait_he_coordination.webp' },
  { name: 'INTERFACING',          category: 'Motorics',  url: BASE + 'Motorics/Portrait_interfacing.webp' },
  { name: 'PERCEPTION',           category: 'Motorics',  url: BASE + 'Motorics/Portrait_perception.webp' },
  { name: 'REACTION SPEED',       category: 'Motorics',  url: BASE + 'Motorics/Portrait_reaction.webp' },
  { name: 'SAVOIR FAIRE',         category: 'Motorics',  url: BASE + 'Motorics/Portrait_savoir-faire.webp' },
  { name: 'AUTHORITY',            category: 'Psyche',    url: BASE + 'Psyche/Portrait_authority.webp' },
  { name: 'EMPATHY',              category: 'Psyche',    url: BASE + 'Psyche/Portrait_empathy.webp' },
  { name: 'ESPRIT DE CORPS',      category: 'Psyche',    url: BASE + 'Psyche/Portrait_esprit-de-Corps.webp' },
  { name: 'INLAND EMPIRE',        category: 'Psyche',    url: BASE + 'Psyche/Portrait_inland-empire.webp' },
  { name: 'SUGGESTION',           category: 'Psyche',    url: BASE + 'Psyche/Portrait_suggestion.webp' },
  { name: 'VOLITION',             category: 'Psyche',    url: BASE + 'Psyche/Portrait_volition.webp' },
  { name: 'ELECTROCHEMISTRY',     category: 'Physique',  url: BASE + 'physique/Portrait_electrochemistry.webp' },
  { name: 'ENDURANCE',            category: 'Physique',  url: BASE + 'physique/Portrait_endurance.webp' },
  { name: 'HALF-LIGHT',           category: 'Physique',  url: BASE + 'physique/Portrait_half-light.webp' },
  { name: 'PAIN THRESHOLD',       category: 'Physique',  url: BASE + 'physique/Portrait_pain-threshold.webp' },
  { name: 'PHYSICAL INSTRUMENT',  category: 'Physique',  url: BASE + 'physique/Portrait_physical-instrument.webp' },
  { name: 'SHIVERS',              category: 'Physique',  url: BASE + 'physique/Portrait_shivers.webp' }
];

var DIFFICULTIES = ['Trivial', 'Easy', 'Medium', 'Challenging', 'Formidable', 'Legendary', 'Heroic', 'Godly', 'Impossible'];
var RESULTS      = ['Success', 'Failure'];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function loadDiscoUsers() {
  SE_API.store.get('discoUsers').then(function(data) {
    if (data && data.value) {
      try { discoUsers = JSON.parse(data.value); } catch(e) { discoUsers = {}; }
    }
  });
}

function saveDiscoUsers() {
  SE_API.store.set('discoUsers', JSON.stringify(discoUsers));
}

window.addEventListener('onWidgetLoad', function(obj) {
  hideAfter = 20;
  loadDiscoUsers();
  // Preload assets
  SKILLS.forEach(function(s) { var i = new Image(); i.src = s.url; });
});

window.addEventListener('onEventReceived', function(obj) {
  var listener = obj.detail.listener;
  var evt      = obj.detail.event;

  // ── Channel point redemption ──────────────────────────────
  if (listener === 'event' && evt && evt.type === 'redemption' && evt.data) {
    var reward = evt.data.redemption && evt.data.redemption.reward;
    var user   = evt.data.redemption && evt.data.redemption.user;
    if (reward && user && reward.title.toLowerCase() === REWARD_NAME.toLowerCase()) {
      discoUsers[user.id] = true;
      saveDiscoUsers();
    }
    return;
  }

  // ── Test button ───────────────────────────────────────────
  if (listener === 'widget-button' && evt && evt.field === 'testDisco') {
    addDiscoMessage('CeaTwo', 'I definitely can\'t imagine Schera being anyone\'s bride...', 'test-user');
    return;
  }

  // ── Chat messages ─────────────────────────────────────────
  if (listener !== 'message') return;
  var data = evt && evt.data;
  if (!data) return;
  if (ignoredUsers.indexOf(data.nick) !== -1) return;
  if (!discoUsers[data.userId]) return;

  addDiscoMessage(data.displayName, data.text, data.userId);
});

function addDiscoMessage(username, text, userId) {
  totalMessages++;
  var n      = totalMessages;
  var skill  = rand(SKILLS);
  var diff   = rand(DIFFICULTIES);
  var result = rand(RESULTS);
  var bar    = CONTINUE_BARS[skill.category] || CONTINUE_BARS.default;
  var tag    = '[' + diff + ': ' + result + '] \u2013 ';

  var html =
    '<div class="disco-message animated fadeIn" id="disco-msg-' + n + '">' +
      '<img class="disco-textbox-bg" src="' + TEXTBOX_URL + '" />' +
      '<div class="disco-portrait-wrapper">' +
        '<img class="disco-portrait" src="' + skill.url + '" onerror="this.style.display=\'none\'" />' +
        '<img class="disco-portrait-border-img" src="' + BORDER_URL + '" />' +
      '</div>' +
      '<div class="disco-content">' +
        '<div class="disco-name">' + username + '</div>' +
        '<div class="disco-skill">' + skill.name + '</div>' +
        '<div class="disco-body" id="disco-body-' + n + '">' +
          '<span class="disco-tag">' + tag + '</span>' +
        '</div>' +
      '</div>' +
      '<img class="disco-continue" src="' + bar + '" />' +
    '</div>';

  var el = $.parseHTML(html);

  if (hideAfter > 0) {
    $(el).appendTo('#log').delay(hideAfter * 1000).queue(function() {
      $(this).removeClass('fadeIn').addClass('fadeOut').delay(1000).queue(function() {
        $(this).remove().dequeue();
      }).dequeue();
    });
  } else {
    $(el).appendTo('#log');
  }

  setTimeout(function() { typeDiscoText('disco-body-' + n, tag, text, 30); }, 150);
}

function typeDiscoText(elementId, tag, text, speed) {
  var el = document.getElementById(elementId);
  if (!el) return;
  // tag is already rendered; typewrite only the message body after it
  el.innerHTML = '<span class="disco-tag">' + tag + '</span>';
  var i = 0, output = '';
  function type() {
    if (i < text.length) {
      output += text.charAt(i);
      el.innerHTML = '<span class="disco-tag">' + tag + '</span>' + output;
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
