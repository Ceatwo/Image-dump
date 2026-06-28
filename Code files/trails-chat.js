// ============================================================
//  TRAILS IN THE SKY — STREAMELEMENTS CHAT OVERLAY
//  Portrait data loaded from external JSON
// ============================================================

var PORTRAITS_URL = "https://raw.githubusercontent.com/Ceatwo/Image-dump/main/Code%20files/trails-portraits.json";

var characterPortraits   = [];
var characterExpressions = {};
var portraitsLoaded      = false;

const expressionKeywords = [
  { keywords: ["lol", "haha", "lmao", "hehe", "xd", ":)", "😂", "😄", "funny", "hilarious", "lmfao", "rofl", "giggle", "chuckle", "amusing", "cracking up", "dying", "ded", "💀", "crying laughing", "screaming"], expression: "happy" },
  { keywords: ["sad", "cry", ":(", "rip", "aw", "nooo", "😢", "😭", "gutted", "heartbroken", "devastated", "depressed", "miserable", "upset", "unhappy", "down", "gloomy", "sorrow", "tears", "crying", "sobbing", "pain", "hurts", "awful", "terrible"], expression: "sad" },
  { keywords: ["angry", "mad", "rage", "ugh", "grr", "!!", "😡", "🤬", "furious", "outraged", "livid", "fuming", "seething", "annoyed", "irritated", "frustrated", "hate", "disgusted", "infuriated", "pissed", "done with", "fed up"], expression: "angry" },
  { keywords: ["gg", "well done", "nice", "great", "amazing", "poggers", "pog", "lets go", "🎉", "👏", "well played", "good job", "excellent", "brilliant", "fantastic", "awesome", "incredible", "proud", "congrats", "gratz", "you got this", "keep going", "cheering", "support", "rooting"], expression: "supportive" },
  { keywords: ["hey", "hi", "hello", "howdy", "hiya", "sup", "yo", "👋", "good morning", "good evening", "good night", "welcome", "greetings", "salutations", "afternoon", "evening", "morning", "heya", "hai", "ello"], expression: "friendly" },
  { keywords: ["wow", "omg", "what", "no way", "seriously", "really", "😲", "😮", "shocked", "wait", "whaaat", "unbelievable", "cant believe", "impossible", "insane", "wild", "crazy", "mind blown", "🤯", "unexpected", "surprised", "whoa", "blimey", "bloody hell"], expression: "shocked" },
  { keywords: ["love", "heart", "<3", "❤️", "💕", "adore", "cute", "aww", "precious", "sweet", "lovely", "beautiful", "gorgeous", "darling", "cherish", "favorite", "best", "💖", "💗", "😍", "🥰", "obsessed", "amazing person"], expression: "love" },
  { keywords: ["think", "hmm", "maybe", "idk", "not sure", "perhaps", "🤔", "pondering", "wondering", "considering", "debating", "unsure", "curious", "question", "dunno", "could be", "possibly", "interesting", "hmmm", "let me think", "good question", "fair point"], expression: "thinking" },
];

var PREMIUM_BITS_REQUIRED = 500;
var manualUnlocks = {};
const pinnedUsers = {};

var totalMessages    = 0;
var messagesLimit    = 0;
var channelName;
var provider;
var addition;
var removeSelector;
var autoUserColor;
var userColor;
var carimboHora;
var localCarimboHora;
var animationIn      = "fadeIn";
var animationOut     = "fadeOut";
var hideCommands     = "true";
var hideAfter        = 30;
var ignoredUsers     = [];
var userCharacterMap = {};
var userCharacterAssignments = {};
var userPremiumUnlocks = {};

var bracerData = {};
var BRACER_RANKS = [
  { name: "Junior",  badge: "Jr",  bp: 0,      senior: false },
  { name: "Senior",  badge: "Sr",  bp: 0,      senior: true  },
  { name: "G",       badge: "G",   bp: 500,    senior: true  },
  { name: "G+",      badge: "G+",  bp: 1200,   senior: true  },
  { name: "F",       badge: "F",   bp: 2500,   senior: true  },
  { name: "F+",      badge: "F+",  bp: 4500,   senior: true  },
  { name: "E",       badge: "E",   bp: 7000,   senior: true  },
  { name: "E+",      badge: "E+",  bp: 10500,  senior: true  },
  { name: "D",       badge: "D",   bp: 15000,  senior: true  },
  { name: "D+",      badge: "D+",  bp: 21000,  senior: true  },
  { name: "C",       badge: "C",   bp: 29000,  senior: true  },
  { name: "C+",      badge: "C+",  bp: 39000,  senior: true  },
  { name: "B",       badge: "B",   bp: 52000,  senior: true  },
  { name: "B+",      badge: "B+",  bp: 68000,  senior: true  },
  { name: "A",       badge: "A",   bp: 88000,  senior: true  },
  { name: "A+",      badge: "A+",  bp: 115000, senior: true  },
  { name: "S",       badge: "S",   bp: 200000, senior: true  },
];
var BRACER_STREAMS_FOR_SENIOR = 5;

function getBracerRank(userId) {
  var user = bracerData[userId];
  if (!user) return BRACER_RANKS[0];
  var senior = (user.qualifiedStreams || 0) >= BRACER_STREAMS_FOR_SENIOR;
  var best = BRACER_RANKS[0];
  for (var i = 0; i < BRACER_RANKS.length; i++) {
    var r = BRACER_RANKS[i];
    if (r.senior && !senior) continue;
    if (user.bp >= r.bp) best = r;
  }
  return best;
}

function getBracerBadgeHtml(userId) {
  if (userId == '161179132' || userId == 161179132 || String(userId) === '161179132') {
    return '<span class="bracer-rank-badge"><span style="font-size:16px;">S</span></span>';
  }
  var rank = getBracerRank(userId);
  var isSr = rank.senior;
  if (isSr && rank.name !== 'Senior') {
    return '<span class="bracer-rank-badge"><span style="font-size:16px;">' + rank.badge + '</span></span>';
  }
  var prefix = isSr ? 'SR' : 'Jr';
  return '<span class="bracer-rank-badge"><span style="font-size:16px;">' + prefix + '</span></span>';
}

function loadPortraits() {
  return fetch(PORTRAITS_URL)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      characterPortraits   = data.pool;
      characterExpressions = data.expressions;
      portraitsLoaded = true;
      characterPortraits.forEach(function(c) {
        var img = new Image(); img.src = c.url;
      });
    })
    .catch(function(e) { console.error("Failed to load portraits JSON:", e); });
}

function loadPersistentData() {
  SE_API.store.get('chatOverlayAssignments').then(function(data) {
    if (data && data.value) {
      try { userCharacterAssignments = JSON.parse(data.value); } catch(e) { userCharacterAssignments = {}; }
    }
  });
  SE_API.store.get('chatOverlayUnlocks').then(function(data) {
    if (data && data.value) {
      try { userPremiumUnlocks = JSON.parse(data.value); } catch(e) { userPremiumUnlocks = {}; }
    }
  });
  SE_API.store.get('bracerPointsData').then(function(data) {
    if (data && data.value) {
      try { bracerData = JSON.parse(data.value); } catch(e) { bracerData = {}; }
    }
  });
  Object.keys(manualUnlocks).forEach(function(uid) {
    if (!userPremiumUnlocks[uid]) userPremiumUnlocks[uid] = [];
    manualUnlocks[uid].forEach(function(variant) {
      if (userPremiumUnlocks[uid].indexOf(variant) === -1) userPremiumUnlocks[uid].push(variant);
    });
  });
}

function saveAssignments() { SE_API.store.set('chatOverlayAssignments', JSON.stringify(userCharacterAssignments)); }
function saveUnlocks()     { SE_API.store.set('chatOverlayUnlocks',     JSON.stringify(userPremiumUnlocks)); }

function hasUnlocked(userId, variantKey) {
  return (userPremiumUnlocks[userId] || []).indexOf(variantKey) !== -1;
}

function unlockVariant(userId, variantKey) {
  if (!userPremiumUnlocks[userId]) userPremiumUnlocks[userId] = [];
  if (!hasUnlocked(userId, variantKey)) {
    userPremiumUnlocks[userId].push(variantKey);
    saveUnlocks();
  }
}

function getPortraitForMessage(userId, messageText, isSubscriber) {
  if (pinnedUsers[userId] !== undefined) return characterPortraits[pinnedUsers[userId]];
  var assignment = userCharacterAssignments[userId];
  if (assignment) {
    if (assignment.poolOnly) {
      var poolChar = characterPortraits.find(function(c) { return c.name.toLowerCase() === assignment.character.toLowerCase(); });
      if (poolChar) return poolChar;
    }
    var charName  = assignment.character;
    var variantName = assignment.variant || null;
    var charData  = characterExpressions[charName];
    if (charData) {
      var pool = charData.base;
      if (variantName && charData.variants && charData.variants[variantName]) pool = charData.variants[variantName];
      if (!isSubscriber) {
        var def = pool["default"];
        return (def && def.url) ? def : characterPortraits[Math.floor(Math.random() * characterPortraits.length)];
      }
      var expression = "default";
      var lower = messageText ? messageText.toLowerCase() : "";
      for (var k = 0; k < expressionKeywords.length; k++) {
        var match = expressionKeywords[k].keywords.some(function(word) {
          try { return new RegExp('(^|\\s)' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\s|$)').test(lower); }
          catch(e) { return lower.includes(word); }
        });
        if (match) { expression = expressionKeywords[k].expression; break; }
      }
      var portrait = pool[expression] || pool["default"];
      if (!portrait || (!portrait.url && !portrait.frames)) return characterPortraits[Math.floor(Math.random() * characterPortraits.length)];
      return portrait;
    }
  }
  var mergedPool = characterPortraits.slice();
  Object.keys(characterExpressions).forEach(function(n) {
    var d = characterExpressions[n] && characterExpressions[n].base && characterExpressions[n].base.default;
    if (d && d.url) mergedPool.push(d);
  });
  return mergedPool[Math.floor(Math.random() * mergedPool.length)];
}

window.addEventListener("onEventReceived", function(obj) {
  if (obj.detail.listener === "delete-message") { $(".message-row[data-id=" + obj.detail.event.msgId + "]").remove(); return; }
  if (obj.detail.listener === "delete-messages") { $(".message-row[data-from=" + obj.detail.event.userId + "]").remove(); return; }
  if (obj.detail.listener === "event" && obj.detail.event.type === "cheer" && obj.detail.event.data) {
    var cd = obj.detail.event.data;
    var bits = parseInt(cd.amount) || 0;
    var uid = cd.userId, msg = (cd.message || "").replace(/cheer\d+/gi, "").trim();
    if (bits >= PREMIUM_BITS_REQUIRED) {
      Object.keys(characterExpressions).forEach(function(charName) {
        Object.keys(characterExpressions[charName].variants || {}).forEach(function(variantKey) {
          if (msg.toLowerCase() === (charName + " " + variantKey).toLowerCase()) unlockVariant(uid, charName + " " + variantKey);
        });
      });
    }
    return;
  }
  if (obj.detail.event.listener === "widget-button") {
    if (obj.detail.event.field === "testMessage") {
      window.dispatchEvent(new CustomEvent("onEventReceived", { detail: { listener: "message", event: { service: "twitch", data: { time: Date.now(), tags: { color: "#f5c842", "display-name": "StreamElements", emotes: "", flags: "", id: "test-id-001", mod: "1", "room-id": "0", subscriber: "0", turbo: "0", "user-id": "100135110", "user-type": "mod" }, nick: channelName, userId: "100135110", displayName: channelName, displayColor: "#f5c842", badges: [], channel: channelName, text: "I definitely can't imagine Schera being anyone's bride...", isAction: false, emotes: [], msgId: "test-id-001" }, renderedText: "I definitely can't imagine Schera being anyone's bride..." } } }));
    }
    return;
  }
  if (obj.detail.listener !== "message") return;
  var data = obj.detail.event.data;
  if (data.text.toLowerCase() === "!reset") { delete userCharacterAssignments[data.userId]; saveAssignments(); return; }
  if (data.text.toLowerCase().startsWith("!here") || data.text.toLowerCase().startsWith("!watching")) {
    if (!userCharacterAssignments[data.userId]) userCharacterAssignments[data.userId] = { character: null, variant: null, active: true };
    userCharacterAssignments[data.userId].active = true;
    saveAssignments();
    return;
  }
  if (data.text.toLowerCase().startsWith("!set ")) {
    var parts = data.text.slice(5).trim();
    var charName = null, variantKey = null;
    Object.keys(characterExpressions).forEach(function(name) {
      if (parts.toLowerCase().startsWith(name.toLowerCase())) {
        charName = name;
        var rest = parts.slice(name.length).trim();
        if (rest) variantKey = rest;
      }
    });
    if (!charName) {
      characterPortraits.forEach(function(c) { if (parts.toLowerCase() === c.name.toLowerCase()) charName = c.name; });
      if (charName) { userCharacterAssignments[data.userId] = { character: charName, variant: null, poolOnly: true }; saveAssignments(); return; }
    }
    if (charName) {
      if (variantKey) {
        var fullKey = charName + " " + variantKey;
        if (hasUnlocked(data.userId, fullKey)) { userCharacterAssignments[data.userId] = { character: charName, variant: variantKey }; saveAssignments(); }
      } else { userCharacterAssignments[data.userId] = { character: charName, variant: null }; saveAssignments(); }
    }
    return;
  }
  if (data.text.startsWith("!") && hideCommands === "true") return;
  if (ignoredUsers.indexOf(data.nick) !== -1) return;
  var message  = attachEmotes(data);
  var badges   = getBracerBadgeHtml(data.userId);
  var color    = data.tags.color || (data.displayColor !== "" ? data.displayColor : "#f5c842");
  var isSub    = data.tags.subscriber === "1";
  addMessage(data.displayName, message, badges, data.userId, data.msgId, color, data.isAction, data.text, isSub);
});

window.addEventListener("onWidgetLoad", function(obj) {
  var f        = obj.detail.fieldData;
  messagesLimit    = f.messagesLimit;
  hideCommands     = f.hideCommands;
  carimboHora      = f.carimboHora;
  channelName      = obj.detail.channel.username;
  userColor        = f.userColor;
  autoUserColor    = f.autoUserColor;
  localCarimboHora = f.localCarimboHora;
  ignoredUsers = f.ignoredUsers.toLowerCase().replace(" ", "").split(",");
  fetch("https://api.streamelements.com/kappa/v2/channels/" + obj.detail.channel.id + "/")
    .then(function(r) { return r.json(); })
    .then(function(p) { provider = p.provider; });
  addition       = "append";
  removeSelector = ".message-row:nth-last-child(n+" + (messagesLimit + 1) + ")";
  if (f.alignMessages === "display: block") {
    addition       = "prepend";
    removeSelector = ".message-row:nth-child(n+" + (messagesLimit + 1) + ")";
  }
  loadPortraits().then(function() { loadPersistentData(); });
});

function addMessage(username, message, badges, userId, msgId, color, isAction, rawText, isSubscriber) {
  totalMessages += 1;
  var character   = getPortraitForMessage(userId, rawText || message, isSubscriber);
  var actionClass = isAction ? "action" : "";
  var nameColor   = "#f5c842";
  if (autoUserColor === "sim") nameColor = color;
  else if (userColor && userColor !== "") nameColor = userColor;
  var hora = "";
  if (carimboHora === "sim") {
    var d = new Date();
    hora = '<span class="time">' + ("0"+d.getHours()).slice(-2) + ':' + ("0"+d.getMinutes()).slice(-2) + '</span>';
  }
  var isAnimated = character && character.frames && character.frames.length > 0;
  var firstFrame = isAnimated ? character.frames[0] : character;
  if (!firstFrame || !firstFrame.url) { firstFrame = characterPortraits[0]; isAnimated = false; }
  var html =
    '<div data-from="' + userId + '" data-id="' + msgId + '" class="message-row ' + animationIn + ' animated" id="msg-' + totalMessages + '">' +
      '<div class="message-row-inner">' +
        '<div class="portrait-col">' +
          '<img class="character-portrait" id="portrait-' + totalMessages + '" src="' + firstFrame.url + '" alt="" onerror="this.style.display=\'none\'" style="' + (firstFrame.flip ? 'transform:scaleX(-1);' : '') + '" />' +
        '</div>' +
        '<div class="dialogue-box-border">' +
          '<svg class="border-svg" xmlns="http://www.w3.org/2000/svg">' +
            '<polygon id="border-poly-' + totalMessages + '" points="" fill="none" stroke="#555566" stroke-width="2"/>' +
            '<polygon id="border-shine-' + totalMessages + '" points="" fill="none" stroke="#d0d0e0" stroke-width="0.75"/>' +
          '</svg>' +
          '<div class="dialogue-box">' +
            '<div class="text-col-top-gap"></div>' +
            '<div class="name-bar">' +
              '<div class="badges">' + badges + '</div>' +
              '<div class="name" style="color:' + nameColor + ';">' + username + '</div>' +
            '</div>' +
            '<div class="dialogue-box-content">' +
              '<div class="text-col">' +
                '<div class="message-body ' + actionClass + '" id="msg-body-' + totalMessages + '"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="dialogue-tail-outer"></div>' +
        '<img class="dialogue-arrow-gif" id="arrow-' + totalMessages + '" src="https://images2.imgbox.com/68/3f/Q6mOixyF_o.gif" style="display:none;" />' +
      '</div>' +
    '</div>';
  var element = $.parseHTML(html);
  function drawBorder(n) {
    var box = document.querySelector("#msg-" + n + " .dialogue-box");
    var poly = document.getElementById("border-poly-" + n);
    var shine = document.getElementById("border-shine-" + n);
    if (!box || !poly) return;
    var w = box.offsetWidth, h = box.offsetHeight, c = 12;
    if (!w || !h) return;
    var pts = c+",1 "+(w-c)+",1 "+(w-1)+","+c+" "+(w-1)+","+(h-c)+" "+(w-c)+","+(h-1)+" "+c+","+(h-1)+" 1,"+(h-c)+" 1,"+c;
    poly.setAttribute("points", pts);
    if (shine) shine.setAttribute("points", pts);
  }
  if (addition === "append") {
    if (hideAfter !== 0) { $(element).appendTo("#log").delay(hideAfter * 1000).queue(function() { $(this).removeClass(animationIn).addClass(animationOut).delay(1000).queue(function() { $(this).remove(); }).dequeue(); }); }
    else { $(element).appendTo("#log"); }
  } else {
    if (hideAfter !== 0) { $(element).prependTo("#log").delay(hideAfter * 1000).queue(function() { $(this).removeClass(animationIn).addClass(animationOut).delay(1000).queue(function() { $(this).remove(); }).dequeue(); }); }
    else { $(element).prependTo("#log"); }
  }
  setTimeout(function() { drawBorder(totalMessages); }, 50);
  setTimeout(function() { typeWriter('msg-body-' + totalMessages, message + hora, 35, totalMessages); }, 100);
  if (isAnimated) setTimeout(function() { animatePortrait('portrait-' + totalMessages, character.frames, character.fps || 8, character.delay || 1000); }, 100);
  if (messagesLimit > 0 && totalMessages > messagesLimit) removeRow();
}

function animatePortrait(elementId, frames, fps, delay) {
  var el = document.getElementById(elementId);
  if (!el || !frames || frames.length < 2) return;
  var frameDelay = delay || 1000;
  function showFrame(index) {
    if (index >= frames.length || !document.getElementById(elementId)) return;
    el.src = frames[index].url;
    el.style.transform = frames[index].flip ? 'scaleX(-1)' : '';
    if (index + 1 < frames.length) setTimeout(function() { showFrame(index + 1); }, frameDelay);
  }
  setTimeout(function() { showFrame(1); }, frameDelay);
}

function typeWriter(elementId, text, speed, msgNum) {
  var el = document.getElementById(elementId);
  if (!el) return;
  var i = 0, isTag = false, output = '';
  function showArrow() { var a = document.getElementById('arrow-' + msgNum); if (a) a.style.display = 'block'; }
  function type() {
    if (i < text.length) {
      if (text.charAt(i) === '<') isTag = true;
      if (isTag) { output += text.charAt(i); if (text.charAt(i) === '>') isTag = false; i++; el.innerHTML = output; type(); }
      else { output += text.charAt(i); el.innerHTML = output; i++; if (el.scrollHeight > el.clientHeight) showArrow(); setTimeout(type, speed); }
    } else { showArrow(); }
  }
  type();
}

function attachEmotes(message) {
  var text = html_encode(message.text);
  var data = message.emotes;
  if (typeof message.attachment !== "undefined")
    if (typeof message.attachment.media !== "undefined")
      if (typeof message.attachment.media.image !== "undefined")
        text = message.text + '<img src="' + message.attachment.media.image.src + '">';
  return text.replace(/([^\s]*)/gi, function(m, key) {
    var result = data.filter(function(e) { return e.name === key; });
    if (typeof result[0] !== "undefined") {
      var url = result[0]["urls"][4];
      if (provider === "twitch") return '<img width="22" class="emote" src="' + url + '"/>';
      if (typeof result[0].coords === "undefined") result[0].coords = { x: 0, y: 0 };
      var x = parseInt(result[0].coords.x), y = parseInt(result[0].coords.y);
      var width = "auto", height = "auto";
      if (provider === "mixer") { if (result[0].coords.width) width = result[0].coords.width + "px"; if (result[0].coords.height) height = result[0].coords.height + "px"; }
      return '<div class="emote" style="width:' + width + ';height:' + height + ';display:inline-block;background-image:url(' + url + ');background-position:-' + x + 'px -' + y + 'px;"></div>';
    }
    return key;
  });
}

function html_encode(str) { var el = document.createElement("textarea"); el.innerHTML = str; return el.value; }

function removeRow() {
  if (!$(removeSelector).length) return;
  if (animationOut !== "none" || !$(removeSelector).hasClass(animationOut)) {
    if (hideAfter !== 0) { $(removeSelector).dequeue(); }
    else { $(removeSelector).addClass(animationOut).delay(1000).queue(function() { $(this).remove().dequeue(); }); }
    return;
  }
  $(removeSelector).animate({ height: 0, opacity: 0 }, "slow", function() { $(removeSelector).remove(); });
}
