// ============================================================
// @ALONE_PATEL - TG: @ALONE_PATEL
// email: atulpatel99357@gmail.com
// FULLY FIXED & ENHANCED BOT WORKER v5.0 FINAL
// ============================================================

// ---------- CREDIT ----------
const CREDIT = {
  name: "ALONE PATEL",
  developer: "@ALONE_PATEL",
  contact: "https://t.me/ALONE_PATEL",
  footer: "Powered by ALONE PATEL API SERVER"
};

// ---------- BASE API ENDPOINTS (DEFAULT) ----------
const DEFAULT_API_MAP = {
  gst: 'https://anon-gst-info.vercel.app/advanced/gstin?key=tempg2206',
  tgid: 'https://mafiaosint.com/api/tgid?apikey=gw_JIy5bmXza-_1hvZS-c-4rGSUFvQT3aA-',
  ff: 'https://anon-ff-info.vercel.app/info?key=76temp',
  imei: 'https://anon-phone-specs.vercel.app/imei?key=temp1104',
  ifsc: 'https://ab-ifscinfoapi.vercel.app/info',
  pincode: 'https://anon-multi-info.vercel.app/pincode?key=temp705',
  ip: 'https://nitin-apis-the-best.vercel.app/api?type=ip',
  tguser: 'https://anon-tg-info.vercel.app/telegram?key=temp1750',
  paknum: 'https://ashuapi.ashupanel.online/api/gateway.php?key=alonepatelapisystem',
  pakcnic: 'https://anon-pak-info.vercel.app/cnic?key=paktemp75',
  pan: 'https://anon-gst-info.vercel.app/advanced/pan?key=tempg2206',
  challan: 'https://nitin-apis-the-best.vercel.app/api?type=vehicle_adv',
  instagram: 'https://uersxinfo.in/api?key=3daysdeno&type=insta',
  pakpolice: 'https://anon-pak-info.vercel.app/police?key=paktemp75',
  upiinfo: 'https://anon-upi-info.vercel.app/upi?key=temp705',
  gmailinfo: 'https://uersxinfo.in/api?key=3daysdeno&type=mail',
  num: 'https://api.salarxapi.pro/api/gateway.php?key=patel',
  aadhar: 'https://api.salarxapi.pro/api/gateway.php?key=patel',
  family: 'https://api.salarxapi.pro/api/gateway.php?key=patel',
  vehicle: 'https://vechileinfoapi.anshppt19.workers.dev/api/rc',
  v2num: 'https://anon-vehicle-info.vercel.app/rc?key=veh0521temp',
  leakk: 'https://uersxinfo.in/api?key=3daysdeno&type=leakk',
  song: 'http://bumblebeee.xyz/song?apikey=FREE-15DAY',
  paytm: 'https://nitin-apis-the-best.vercel.app/api?type=paytm',
  adhaar: 'https://nitin-apis-the-best.vercel.app/api?type=adhaar',
  girlfriend: 'https://riya-girlfriend.asurpapa.workers.dev/chat',
  github: 'https://nitin-apis-the-best.vercel.app/api?type=github',
  number_adv: 'https://nitin-apis-the-best.vercel.app/api?type=number_adv',
  vehicle_adv: 'https://nitin-apis-the-best.vercel.app/api?type=vehicle_adv',
  numverify: 'https://api.veriphone.io/v2/verify?key=738C00CEFCA6406E8F73D9F0C7AC5E04',
  // ============ NEW PERMANENT FREE APIS ============
  pan_gst: 'https://anon-gst-info.vercel.app/pan?key=anon404',
  gst_basic: 'https://anon-gst-info.vercel.app/gstin?key=anon404'
};

// ---------- GET API BASE URL ----------
async function getApiBase(action, env) {
  const customUrl = await env.API_DATA.get(`apiconfig:${action}`);
  if (customUrl) return customUrl;
  return DEFAULT_API_MAP[action] || null;
}

// ---------- PARAM MAPPING ----------
const PARAM_MAP = {
  gst: 'gstin', tgid: 'id', ff: 'uid', imei: 'imei', ifsc: 'ifsc',
  pincode: 'code', ip: 'ip', tguser: 'username', paknum: 'pak', pakcnic: 'q',
  pan: 'pan', challan: 'rc', instagram: 'term', pakpolice: 'num', upiinfo: 'q',
  gmailinfo: 'term', num: 'number', aadhar: 'aadhar', family: 'aadhar',
  vehicle: 'number', v2num: 'rc',
  leakk: 'term', song: 'name', paytm: 'info', adhaar: 'adhaar',
  girlfriend: 'msg', github: 'username', number_adv: 'mobile',
  vehicle_adv: 'rc', numverify: 'phone',
  pan_gst: 'pan', gst_basic: 'gstin'
};

// ---------- SEARCH FIELD MAP ----------
const SEARCH_FIELD_MAP = {
  'num': 'Number',
  'number_adv': 'Mobile Number',
  'aadhar': 'Aadhar Number',
  'family': 'Aadhar Number',
  'adhaar': 'Aadhar Number',
  'pan': 'PAN Number',
  'pan_gst': 'PAN Number',
  'vehicle': 'Vehicle Number',
  'v2num': 'Vehicle Number',
  'vehicle_adv': 'Vehicle Number',
  'challan': 'Vehicle Number',
  'gst': 'GST Number',
  'gst_basic': 'GST Number',
  'ifsc': 'IFSC Code',
  'pincode': 'Pincode',
  'ip': 'IP Address',
  'tgid': 'Telegram ID',
  'tguser': 'Telegram Username',
  'paknum': 'Pakistan Number',
  'pakcnic': 'Pakistan CNIC',
  'pakpolice': 'Police Number',
  'instagram': 'Instagram Username',
  'upiinfo': 'UPI ID',
  'gmailinfo': 'Gmail Address',
  'leakk': 'Search Term',
  'song': 'Song Name',
  'paytm': 'Paytm Info',
  'girlfriend': 'Message',
  'github': 'GitHub Username',
  'numverify': 'Phone Number',
  'imei': 'IMEI Number',
  'ff': 'FreeFire UID'
};

const API_LIST = Object.keys(DEFAULT_API_MAP);
const MAX_MESSAGE_LENGTH = 4000;
const OWNER_ID = 8317235185;
const COST_PER_CALL = 1;
const TEST_KEY_EXPIRY_HOURS = 5;

// ============================================================
// HELPER FUNCTIONS
// ============================================================

async function sendLongMessage(chatId, message, env, parse_mode = 'HTML', reply_markup = null) {
  if (message.length <= MAX_MESSAGE_LENGTH) {
    await sendTelegram(chatId, message, env, parse_mode, reply_markup);
    return;
  }

  const keyboard = {
    inline_keyboard: [
      [{ text: '📄 Send as File', callback_data: `file_pref::file::${Date.now()}` }],
      [{ text: '📝 Send as Parts', callback_data: `file_pref::parts::${Date.now()}` }]
    ]
  };
  await sendTelegram(chatId,
    "⚠️ <b>Message is too long!</b>\n\n" +
    "Choose how you want to receive the data:\n" +
    "• <b>Send as File</b> - Get a text file with all data\n" +
    "• <b>Send as Parts</b> - Get data split into multiple messages\n\n" +
    "📌 <i>Note: File option is recommended for large data.</i>",
    env, 'HTML', JSON.stringify(keyboard)
  );

  await setState(chatId, {
    step: 'long_message_pending',
    message: message,
    parse_mode: parse_mode,
    reply_markup: reply_markup
  }, env);
}

async function sendAsFile(chatId, content, env, filename = null) {
  const token = env.TELEGRAM_BOT_TOKEN || '8910963288:AAG-1ZRAyG3fPD4R5mdV8lC_quD6xWn6naM';
  const url = `https://api.telegram.org/bot${token}/sendDocument`;
  const chatIdStr = String(chatId);
  const finalFilename = filename || `${chatIdStr}_data.txt`;

  const formData = new FormData();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  formData.append('document', blob, finalFilename);
  formData.append('chat_id', chatId);
  formData.append('caption', `📄 <b>Data exported successfully!</b>\n\n📁 File: ${finalFilename}\n📊 Size: ${Math.round(content.length / 1024)} KB`);
  formData.append('parse_mode', 'HTML');

  await fetch(url, { method: 'POST', body: formData });
}

async function sendAsParts(chatId, message, env, parse_mode = 'HTML', reply_markup = null) {
  const parts = [];
  let currentPart = '';
  const lines = message.split('\n');

  for (const line of lines) {
    if (currentPart.length + line.length + 1 > MAX_MESSAGE_LENGTH) {
      parts.push(currentPart);
      currentPart = '';
    }
    currentPart += line + '\n';
  }
  if (currentPart) parts.push(currentPart);

  const totalParts = parts.length;
  for (let i = 0; i < totalParts; i++) {
    const partHeader = `📄 Part ${i + 1}/${totalParts}\n━━━━━━━━━━━━━━━━━━━\n\n`;
    const finalMessage = partHeader + parts[i];
    const isLast = (i === totalParts - 1);
    await sendTelegram(chatId, finalMessage, env, parse_mode, isLast ? reply_markup : null);
  }
}

// ---------- KV HELPERS ----------
async function getKeyData(apiKey, env) {
  if (env.API_DATA) {
    const val = await env.API_DATA.get(apiKey, 'json');
    if (val) return val;
  }
  const staticKeys = env.STATIC_KEYS ? env.STATIC_KEYS.split(',') : [];
  if (staticKeys.includes(apiKey)) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + (env.DEFAULT_EXPIRY_DAYS || 365));
    return {
      user_id: 0,
      daily_limit: parseInt(env.DEFAULT_DAILY_LIMIT || 100),
      hourly_limit: parseInt(env.DEFAULT_HOURLY_LIMIT || 20),
      minute_limit: parseInt(env.DEFAULT_MINUTE_LIMIT || 5),
      expiry_date: expiry.toISOString().split('T')[0],
      expiry_time: expiry.toISOString(),
      allowed_apis: '*',
      status: 'active'
    };
  }
  return null;
}
// ---------- ROLE HELPERS (FIX) ----------
async function getAllAdmins(env) {
  const list = await env.API_DATA.list({ prefix: 'role:' });
  const admins = [];
  for (const item of list.keys) {
    const role = await env.API_DATA.get(item.name);
    if (role === 'admin') {
      const chatId = item.name.replace('role:', '');
      admins.push(chatId);
    }
  }
  return admins;
}

async function getAllResellers(env) {
  const list = await env.API_DATA.list({ prefix: 'role:' });
  const resellers = [];
  for (const item of list.keys) {
    const role = await env.API_DATA.get(item.name);
    if (role === 'reseller') {
      const chatId = item.name.replace('role:', '');
      resellers.push(chatId);
    }
  }
  return resellers;
}

async function updateUsage(apiKey, env) {
  if (!env.API_DATA) return null;
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const hour = now.toISOString().slice(0, 13) + ':00:00';
  const minute = now.toISOString().slice(0, 16) + ':00';
  const key = `usage:${apiKey}`;
  let usage = await env.API_DATA.get(key, 'json') || { date: today, hour, minute, daily: 0, hourly: 0, minuteCount: 0 };
  if (usage.date !== today) { usage.daily = 0;
    usage.date = today; }
  if (usage.hour !== hour) { usage.hourly = 0;
    usage.hour = hour; }
  if (usage.minute !== minute) { usage.minuteCount = 0;
    usage.minute = minute; }
  usage.daily += 1;
  usage.hourly += 1;
  usage.minuteCount += 1;
  await env.API_DATA.put(key, JSON.stringify(usage), { expirationTtl: 86400 * 2 });
  return usage;
}

async function getUser(chatId, env) {
  const user = await env.API_DATA.get(`user:${chatId}`, 'json');
  if (!user) {
    return {
      chat_id: chatId, username: '', fullname: '', balance: 10,
      daily_limit: 100, hourly_limit: 20, minute_limit: 5,
      used_today: 0, used_hour: 0, used_minute: 0
    };
  }
  if (user.balance === undefined) user.balance = 10;
  if (!user.daily_limit) user.daily_limit = 100;
  if (!user.hourly_limit) user.hourly_limit = 20;
  if (!user.minute_limit) user.minute_limit = 5;
  if (user.used_today === undefined) user.used_today = 0;
  if (user.used_hour === undefined) user.used_hour = 0;
  if (user.used_minute === undefined) user.used_minute = 0;
  return user;
}

async function updateUserBalance(chatId, amount, env) {
  const user = await getUser(chatId, env);
  user.balance = (user.balance || 0) + amount;
  await env.API_DATA.put(`user:${chatId}`, JSON.stringify(user));
  return user.balance;
}

async function setUserBalance(chatId, amount, env) {
  const user = await getUser(chatId, env);
  user.balance = amount;
  await env.API_DATA.put(`user:${chatId}`, JSON.stringify(user));
  return user.balance;
}

async function getRole(chatId, env) { return await env.API_DATA.get(`role:${chatId}`) || null; }
async function setRole(chatId, role, env) { await env.API_DATA.put(`role:${chatId}`, role); }
async function removeRole(chatId, env) { await env.API_DATA.delete(`role:${chatId}`); }
async function isOwner(chatId) { return parseInt(chatId) === OWNER_ID; }
async function isAdmin(chatId, env) {
  if (await isOwner(chatId)) return true;
  return (await getRole(chatId, env)) === 'admin';
}
async function isReseller(chatId, env) {
  if (await isOwner(chatId)) return true;
  if (await isAdmin(chatId, env)) return true;
  return (await getRole(chatId, env)) === 'reseller';
}

function generateAPIKey() {
  return 'ALONE_PATEL-' + Array.from(crypto.getRandomValues(new Uint8Array(8))).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
}

async function createAPIKeyForUser(chatId, daily, hourly, minute, expiryDays, expiryHours, expiryMinutes, allowed, env) {
  const key = generateAPIKey();
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + expiryDays);
  expiry.setHours(expiry.getHours() + expiryHours);
  expiry.setMinutes(expiry.getMinutes() + expiryMinutes);
  const keyData = {
    user_id: chatId,
    daily_limit: daily,
    hourly_limit: hourly,
    minute_limit: minute,
    expiry_date: expiry.toISOString().split('T')[0],
    expiry_time: expiry.toISOString(),
    allowed_apis: allowed || '*',
    status: 'active'
  };
  await env.API_DATA.put(key, JSON.stringify(keyData));
  const userKeys = await env.API_DATA.get(`userkeys:${chatId}`, 'json') || [];
  userKeys.push(key);
  await env.API_DATA.put(`userkeys:${chatId}`, JSON.stringify(userKeys));
  return key;
}

async function getKeysForUser(chatId, env) {
  const keys = await env.API_DATA.get(`userkeys:${chatId}`, 'json') || [];
  const result = [];
  for (const k of keys) {
    const data = await env.API_DATA.get(k, 'json');
    if (data) result.push({ key: k, ...data });
  }
  return result;
}

async function blockAllKeysForUser(chatId, env) {
  const keys = await getKeysForUser(chatId, env);
  for (const k of keys) {
    await blockAPIKey(k.key, env);
  }
  return keys.length;
}

async function deleteAPIKey(key, env) {
  const data = await env.API_DATA.get(key, 'json');
  if (!data) return false;
  const userKeys = await env.API_DATA.get(`userkeys:${data.user_id}`, 'json') || [];
  const newList = userKeys.filter(k => k !== key);
  await env.API_DATA.put(`userkeys:${data.user_id}`, JSON.stringify(newList));
  await env.API_DATA.delete(key);
  return true;
}

async function blockAPIKey(key, env) {
  const data = await env.API_DATA.get(key, 'json');
  if (!data) return false;
  data.status = 'blocked';
  await env.API_DATA.put(key, JSON.stringify(data));
  return true;
}

async function unblockAPIKey(key, env) {
  const data = await env.API_DATA.get(key, 'json');
  if (!data) return false;
  data.status = 'active';
  await env.API_DATA.put(key, JSON.stringify(data));
  return true;
}

async function setKeyLimits(key, daily, hourly, minute, env) {
  const data = await env.API_DATA.get(key, 'json');
  if (!data) return false;
  data.daily_limit = daily;
  data.hourly_limit = hourly;
  data.minute_limit = minute;
  await env.API_DATA.put(key, JSON.stringify(data));
  return true;
}

async function getState(chatId, env) { return await env.API_DATA.get(`state:${chatId}`, 'json') || null; }
async function setState(chatId, state, env) { await env.API_DATA.put(`state:${chatId}`, JSON.stringify(state), { expirationTtl: 3600 }); }
async function clearState(chatId, env) { await env.API_DATA.delete(`state:${chatId}`); }

async function logAPICall(apiKey, action, paramValue, env) {
  if (!env.API_DATA) return;
  const logKey = `log:${apiKey}`;
  let logs = await env.API_DATA.get(logKey, 'json') || [];
  logs.push({ time: new Date().toISOString(), action, param: paramValue });
  if (logs.length > 50) logs = logs.slice(-50);
  await env.API_DATA.put(logKey, JSON.stringify(logs), { expirationTtl: 86400 * 7 });
}

async function getLogs(apiKey, env) {
  const logKey = `log:${apiKey}`;
  return await env.API_DATA.get(logKey, 'json') || [];
}

async function getUserLogs(chatId, env) {
  const keys = await getKeysForUser(chatId, env);
  let all = [];
  for (const k of keys) {
    const logs = await getLogs(k.key, env);
    for (const l of logs) { all.push({ key: k.key, ...l }); }
  }
  all.sort((a, b) => new Date(b.time) - new Date(a.time));
  return all.slice(0, 50);
}

// ---------- TELEGRAM HELPERS ----------
async function sendTelegram(chatId, message, env, parse_mode = 'HTML', reply_markup = null) {
  const token = env.TELEGRAM_BOT_TOKEN || '8910963288:AAG-1ZRAyG3fPD4R5mdV8lC_quD6xWn6naM';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const payload = { chat_id: chatId, text: message, parse_mode };
  if (reply_markup) payload.reply_markup = reply_markup;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

async function sendPhoto(chatId, photo, caption, env) {
  const token = env.TELEGRAM_BOT_TOKEN || '8910963288:AAG-1ZRAyG3fPD4R5mdV8lC_quD6xWn6naM';
  const url = `https://api.telegram.org/bot${token}/sendPhoto`;
  const payload = { chat_id: chatId, photo, caption };
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

async function answerCallback(callbackId, text, env) {
  const token = env.TELEGRAM_BOT_TOKEN || '8910963288:AAG-1ZRAyG3fPD4R5mdV8lC_quD6xWn6naM';
  const url = `https://api.telegram.org/bot${token}/answerCallbackQuery`;
  const payload = { callback_query_id: callbackId, text };
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

async function editTelegram(chatId, messageId, text, env, parse_mode = 'HTML', reply_markup = null) {
  const token = env.TELEGRAM_BOT_TOKEN || '8910963288:AAG-1ZRAyG3fPD4R5mdV8lC_quD6xWn6naM';
  const url = `https://api.telegram.org/bot${token}/editMessageText`;
  const payload = { chat_id: chatId, message_id: messageId, text, parse_mode };
  if (reply_markup) payload.reply_markup = reply_markup;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

// ---------- BUILD KEY DETAILS (FULL VERSION) ----------
function buildKeyDetails(keyData, usage) {
  const now = new Date();
  let expiresOn = 'Never';
  let validDays = '∞';
  if (keyData.expiry_time) {
    const expDate = new Date(keyData.expiry_time);
    expiresOn = expDate.toLocaleString();
    const diff = Math.ceil((expDate - now) / (1000 * 60 * 60 * 24));
    validDays = diff > 0 ? diff : 0;
  } else if (keyData.expiry_date) {
    expiresOn = keyData.expiry_date;
    const expDate = new Date(keyData.expiry_date + 'T23:59:59');
    const diff = Math.ceil((expDate - now) / (1000 * 60 * 60 * 24));
    validDays = diff > 0 ? diff : 0;
  }

  const dailyUsed = (usage && usage.daily) ? usage.daily : 0;
  const hourlyUsed = (usage && usage.hourly) ? usage.hourly : 0;
  const minuteUsed = (usage && usage.minuteCount) ? usage.minuteCount : 0;
  const monthlyLimit = (keyData.daily_limit || 0) * 30;
  const monthlyUsed = dailyUsed * 30;

  return {
    used_today: dailyUsed,
    daily_limit: keyData.daily_limit || 0,
    used_hourly: hourlyUsed,
    hourly_limit: keyData.hourly_limit || 0,
    used_minute: minuteUsed,
    minute_limit: keyData.minute_limit || 0,
    used_monthly: monthlyUsed,
    monthly_limit: monthlyLimit,
    valid_days: validDays,
    expires_on: expiresOn,
    req_left: Math.max(0, (keyData.daily_limit || 0) - dailyUsed),
    req_total: keyData.daily_limit || 0
  };
}

// ---------- HELPER: get API links ----------
async function getApiLinksText(key, allowedApis, env) {
  const baseUrl = "https://api-src.alonepatel.workers.dev/api";
  let links = "\n\n🔗 <b>YOUR API LINKS:</b>\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n";
  let apis = allowedApis === '*' ? ['num', 'aadhar', 'pan', 'pan_gst', 'gst_basic'] : allowedApis.split(',');
  const isAll = allowedApis === '*';

  for (const api of apis) {
    if (api === 'num' || api === '*') {
      links += `📱 <b>NUMBER API:</b>\n<code>${baseUrl}?key=${key}&number=9876543210</code>\n\n`;
    } else if (api === 'aadhar' || api === 'family' || api === 'adhaar') {
      links += `🆔 <b>${api.toUpperCase()} API:</b>\n<code>${baseUrl}?key=${key}&action=${api}&aadhar=[Aadhaar_Redacted]</code>\n\n`;
    } else if (api === 'pan') {
      links += `💳 <b>PAN API:</b>\n<code>${baseUrl}?key=${key}&action=pan&pan=ABCDE1234F</code>\n\n`;
    } else if (api === 'pan_gst') {
      links += `💳 <b>PAN TO GSTIN API:</b>\n<code>${baseUrl}?key=${key}&action=pan_gst&pan=AAYFK4129N</code>\n\n`;
    } else if (api === 'gst_basic') {
      links += `💳 <b>GSTIN BASIC API:</b>\n<code>${baseUrl}?key=${key}&action=gst_basic&gstin=09AAYFK4129N1ZF</code>\n\n`;
    } else {
      const paramMap = {
        gst: 'gstin=22AAAAA0000A1Z5', tgid: 'id=123456789', ff: 'uid=123456789',
        imei: 'imei=123456789012345', ifsc: 'ifsc=SBIN0000001',
        pincode: 'code=110001', ip: 'ip=8.8.8.8', tguser: 'username=alonepatel',
        paknum: 'pak=03001234567', pakcnic: 'q=1234512345671',
        challan: 'rc=UP32AB1234', instagram: 'term=alonepatel', pakpolice: 'num=03001234567',
        upiinfo: 'q=example@ybl', gmailinfo: 'term=example@gmail.com',
        vehicle: 'number=UP32AB1234', v2num: 'rc=UP32AB1234',
        leakk: 'term=test', song: 'name=sanam%20re', paytm: 'info=9876543210',
        adhaar: 'adhaar=352283381852', girlfriend: 'msg=hello', github: 'username=octocat',
        number_adv: 'mobile=6204458125', vehicle_adv: 'rc=RJ18CF3690',
        numverify: 'phone=923350071964'
      };
      const param = paramMap[api] || 'q=example';
      links += `🔹 <b>${api.toUpperCase()} API:</b>\n<code>${baseUrl}?key=${key}&action=${api}&${param}</code>\n\n`;
    }
  }

  if (isAll) {
    links += `\n✅ <b>This key has access to ALL APIs.</b>\n`;
    links += `\n📌 <b>New APIs Added:</b> PAN to GSTIN, GSTIN Basic\n`;
  }
  return links;
}

// ---------- FORMAT FUNCTIONS ----------
async function formatProfileMessage(chatId, env) {
  const user = await getUser(chatId, env);
  const keys = await getKeysForUser(chatId, env);
  const allKeys = await env.API_DATA.list({ prefix: 'ALONE_PATEL-' });
  let blockedKeys = [];
  for (const item of allKeys.keys) {
    const data = await env.API_DATA.get(item.name, 'json');
    if (data && data.status === 'blocked') {
      blockedKeys.push({ key: item.name, ...data });
    }
  }
  const sep = "╠══════════════════════╣";
  let msg = `👤 <b>MY PROFILE</b>\n\n`;
  msg += `💰 <b>Balance:</b> ${user.balance || 0} units\n`;
  msg += `💸 <b>Cost per API call:</b> ${COST_PER_CALL} unit(s)\n\n`;
  msg += `${sep}\n`;
  msg += `📊 <b>Your Global Rate Limits (per user):</b>\n`;
  msg += `📅 Daily: <b>${user.daily_limit}</b> (Used: ${user.used_today || 0})\n`;
  msg += `⏱ Hourly: <b>${user.hourly_limit}</b> (Used: ${user.used_hour || 0})\n`;
  msg += `⏳ Minute: <b>${user.minute_limit}</b> (Used: ${user.used_minute || 0})\n`;
  msg += `${sep}\n`;
  if (keys.length > 0) {
    msg += `🔑 <b>Your API Keys (${keys.length}):</b>\n`;
    for (const k of keys) {
      const usage = await env.API_DATA.get(`usage:${k.key}`, 'json') || { daily: 0 };
      let expiryStr = k.expiry_date || 'Never';
      if (k.expiry_time) {
        const expDate = new Date(k.expiry_time);
        expiryStr = expDate.toLocaleString();
      } else if (k.expiry_date) {
        expiryStr = k.expiry_date;
      }
      msg += `• <code>${k.key}</code>\n`;
      msg += `  └ Daily: ${k.daily_limit} (Used: ${usage.daily || 0})\n`;
      msg += `  └ Expiry: ${expiryStr}\n`;
      msg += `  └ Status: ${k.status}\n`;
      const links = await getApiLinksText(k.key, k.allowed_apis || '*', env);
      msg += links;
    }
  } else {
    msg += `❌ No API keys yet. Generate one using the menu.\n`;
  }
  msg += `${sep}\n`;
  if (blockedKeys.length > 0) {
    msg += `🚫 <b>Blocked Keys (${blockedKeys.length}):</b>\n`;
    for (const bk of blockedKeys) {
      msg += `• <code>${bk.key}</code> (User: ${bk.user_id})\n`;
    }
  } else {
    msg += `✅ No blocked keys found.\n`;
  }
  msg += `${sep}`;
  return msg;
}

// ============================================================
function formatHelpMessage(isAdmin, isReseller, isOwner) {
  let msg = "📚 <b>Available Commands & Buttons</b>\n\n";
  msg += "🔹 <b>General Commands (everyone)</b>\n";
  msg += "  <b>/start</b> – Show welcome menu\n";
  msg += "  <b>/key</b> – List your API keys\n";
  msg += "  <b>/mykeys</b> – List your API keys (alias)\n";
  msg += "  <b>/balance</b> – Check your balance\n";
  msg += "  <b>/profile</b> – View full profile\n";
  msg += "  <b>/history</b> – View your recent API calls\n";
  msg += "  <b>/help</b> – Show this message\n\n";
  
  msg += "🔸 <b>Reseller+ Commands</b>\n";
  msg += "  <b>/genkey</b> &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis] – Generate new API key\n";
  msg += "     Example: <code>/genkey 100 20 5 365 gst,pan</code>\n";
  msg += "  <b>/addkey</b> &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis] – Add custom key\n";
  msg += "     Example: <code>/addkey ALONE_PATEL-NEW123 100 20 5 365 gst,pan</code>\n";
  msg += "  <b>/blockkey</b> &lt;key&gt; – Block a key\n";
  msg += "     Example: <code>/blockkey ALONE_PATEL-ABC123</code>\n";
  msg += "  <b>/unblockkey</b> &lt;key&gt; – Unblock a key\n";
  msg += "     Example: <code>/unblockkey ALONE_PATEL-ABC123</code>\n";
  msg += "  ⚡ CLICK AND GENERATE KEY – Interactive key generation\n";
  msg += "  🚀 UNLIMITED API CREATE – Unlimited duration (999,999 daily)\n\n";
  
  msg += "🔹 <b>Admin+ Commands</b>\n";
  msg += "  <b>/adduser</b> &lt;chat_id&gt; &lt;username&gt; &lt;fullname&gt; – Add user\n";
  msg += "     Example: <code>/adduser 123456789 alonepatel ALONE PATEL</code>\n";
  msg += "  <b>/removeuser</b> &lt;chat_id&gt; – Remove user\n";
  msg += "     Example: <code>/removeuser 123456789</code>\n";
  msg += "  <b>/listusers</b> – List all users\n";
  msg += "  <b>/userinfo</b> &lt;chat_id&gt; – Show user details\n";
  msg += "     Example: <code>/userinfo 123456789</code>\n";
  msg += "  <b>/setkeylimit</b> &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; – Change key limits\n";
  msg += "     Example: <code>/setkeylimit ALONE_PATEL-ABC123 100 20 5</code>\n";
  msg += "  <b>/getkey</b> &lt;key&gt; – Get key info\n";
  msg += "     Example: <code>/getkey ALONE_PATEL-ABC123</code>\n";
  msg += "  <b>/listkeys</b> – List all keys\n";
  msg += "  <b>/setbalance</b> &lt;chat_id&gt; &lt;amount&gt; – Set user balance\n";
  msg += "     Example: <code>/setbalance 123456789 100</code>\n";
  msg += "  <b>/resetbalance</b> &lt;chat_id&gt; – Reset balance to 10\n";
  msg += "     Example: <code>/resetbalance 123456789</code>\n";
  msg += "  <b>/addbalance</b> &lt;chat_id&gt; &lt;amount&gt; – Add balance\n";
  msg += "     Example: <code>/addbalance 123456789 50</code>\n";
  msg += "  <b>/deduct</b> &lt;chat_id&gt; &lt;amount&gt; – Deduct balance\n";
  msg += "     Example: <code>/deduct 123456789 20</code>\n";
  msg += "  <b>/getkeys</b> &lt;chat_id or @username&gt; – Get user's keys\n";
  msg += "     Example: <code>/getkeys 123456789</code> or <code>/getkeys @username</code>\n";
  msg += "  <b>/deletekey</b> &lt;key&gt; – Delete a key\n";
  msg += "     Example: <code>/deletekey ALONE_PATEL-ABC123</code>\n";
  msg += "  <b>/updateapi</b> &lt;action&gt; &lt;new_url&gt; – Update API base URL\n";
  msg += "     Example: <code>/updateapi ifsc https://new-ifsc-api.com/info</code>\n";
  msg += "  <b>/resetapi</b> &lt;action&gt; – Reset API to default\n";
  msg += "     Example: <code>/resetapi ifsc</code>\n";
  msg += "  <b>/adminlist</b> – List all admins/resellers and their keys\n";
  msg += "  <b>/removeuserkeys</b> &lt;chat_id&gt; – Block all keys of a user\n";
  msg += "     Example: <code>/removeuserkeys 123456789</code>\n\n";
  
  msg += "🔸 <b>Owner Only Commands</b>\n";
  msg += "  <b>/addadmin</b> &lt;chat_id&gt; [expiry] – Add admin with expiry\n";
  msg += "     Examples:\n";
  msg += "     <code>/addadmin 123456789</code> (no expiry)\n";
  msg += "     <code>/addadmin 123456789 1d</code> (1 day expiry)\n";
  msg += "     <code>/addadmin 123456789 1m</code> (1 month expiry)\n";
  msg += "     <code>/addadmin 123456789 30d</code> (30 days expiry)\n";
  msg += "     <code>/addadmin 123456789 1y</code> (1 year expiry)\n";
  msg += "  <b>/removeadmin</b> &lt;chat_id&gt; – Remove admin (blocks all keys)\n";
  msg += "     Example: <code>/removeadmin 123456789</code>\n";
  msg += "  <b>/addreseller</b> &lt;chat_id&gt; [expiry] – Add reseller with expiry\n";
  msg += "     Examples:\n";
  msg += "     <code>/addreseller 123456789</code> (no expiry)\n";
  msg += "     <code>/addreseller 123456789 1d</code> (1 day expiry)\n";
  msg += "     <code>/addreseller 123456789 1m</code> (1 month expiry)\n";
  msg += "  <b>/removereseller</b> &lt;chat_id&gt; – Remove reseller (blocks all keys)\n";
  msg += "     Example: <code>/removereseller 123456789</code>\n";
  msg += "  <b>/stats</b> – Show bot statistics\n";
  msg += "  <b>/broadcast</b> &lt;message&gt; – Broadcast to all users\n";
  msg += "     Example: <code>/broadcast Hello everyone!</code>\n";
  msg += "  <b>/allstats</b> – Detailed user stats\n\n";

  // ============ AVAILABLE APIs SECTION WITH <b> TAGS ============
  msg += "━━━━━━━━━━━━━━━━━━━\n";
  msg += "📌 <b>Available APIs:</b>\n";
  msg += "  • <b>Number APIs:</b> num, number_adv, numverify, paknum, v2num\n";
  msg += "  • <b>Identity APIs:</b> aadhar, adhaar, family, pan, pan_gst\n";
  msg += "  • <b>Vehicle APIs:</b> vehicle, v2num, vehicle_adv, challan\n";
  msg += "  • <b>Business APIs:</b> gst, gst_basic, ifsc, pincode\n";
  msg += "  • <b>Social APIs:</b> instagram, gmailinfo, tgid, tguser\n";
  msg += "  • <b>Pakistan APIs:</b> paknum, pakcnic, pakpolice\n";
  msg += "  • <b>Info APIs:</b> ip, leakk, upiinfo, paytm, github\n";
  msg += "  • <b>Device APIs:</b> imei, ff\n";
  // ============ END ============
  
  return msg;
}

// ---------- KEYBOARDS ----------
function mainMenuKeyboard(isAdmin = false, isReseller = false, isOwner = false) {
  let keyboard = [];
  
  keyboard.push([{ text: '⚡ CLICK AND GENERATE KEY ⚡' }, { text: '🚀 UNLIMITED API CREATE 🚀' }]);
  keyboard.push([{ text: '⚙️ CREATE CUSTOM KEY ⚙️' }, { text: '🗑️ DELETE KEY' }]);
  
  let adminResellerRow = [];
  if (isOwner) {
    adminResellerRow.push({ text: '🛡️ ADMIN MENU 🛡️' });
  }
  if (isReseller || isAdmin || isOwner) {
    adminResellerRow.push({ text: '💼 RESELLER MENU 💼' });
  }
  if (adminResellerRow.length > 0) {
    keyboard.push(adminResellerRow);
  }
  
  if (isReseller && !isAdmin && !isOwner) {
    keyboard.push([{ text: '🚫 BLOCK KEY' }, { text: '✅ UNBLOCK KEY' }]);
  }
  
  keyboard.push([{ text: '🔑 My Keys' }, { text: '💬 Contact (DM)' }]);
  keyboard.push([{ text: '🔍 VIEW BLOCKED KEYS' }, { text: '❓ HELP' }]);
  
  return {
    keyboard: keyboard,
    resize_keyboard: true,
    one_time_keyboard: false
  };
}

function adminMenuKeyboard() {
  return {
    keyboard: [
      [{ text: '📊 ADMIN STATS' }, { text: '📋 ADMIN LIST' }],
      [{ text: '➕ ADD ADMIN' }, { text: '➖ REMOVE ADMIN' }],
      [{ text: '📜 LIST ADMINS' }, { text: '📜 LIST RESELLERS' }],
      [{ text: '➕ ADD RESELLER' }, { text: '➖ REMOVE RESELLER' }],
      [{ text: '📈 RESELLER STATS' }, { text: '🔍 Get User Keys' }],
      [{ text: '🚫 BLOCK KEY' }, { text: '✅ UNBLOCK KEY' }],
      [{ text: '⬅️ BACK TO MENU' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };
}

function resellerMenuKeyboard() {
  return {
    keyboard: [
      [{ text: '⚡ CLICK AND GENERATE KEY ⚡' }, { text: '🚀 UNLIMITED API CREATE 🚀' }],
      [{ text: '🚫 BLOCK KEY' }, { text: '✅ UNBLOCK KEY' }],
      [{ text: '🔑 My Keys' }, { text: '💬 Contact (DM)' }],
      [{ text: '⬅️ BACK TO MENU' }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };
}

function durationInlineKeyboard() {
  const labels = [
    '2 Hours','5 Hours','1 Day','3 Days','1 Week','2 Weeks','15 Days',
    '1 Month','2 Months','3 Months','6 Months','12 Months',
    '100 / 1 Day','500 / 3 Days','1000 / 7 Days'
  ];
  const buttons = labels.map(label => ({ text: `⏱️ 「 ${label} 」`, callback_data: `dur::${label}` }));
  const rows = [];
  for (let i = 0; i < buttons.length; i += 2) {
    rows.push(buttons.slice(i, i + 2));
  }
  return { inline_keyboard: rows };
}

// ---------- UNLIMITED DURATION KEYBOARD WITH PAGINATION ----------
const DURATION_ITEMS = [
  { label: '♾️ Unlimited', type: 'unlimited', value: 0 },
  { label: '15 min', type: 'min', value: 15 },
  { label: '30 min', type: 'min', value: 30 },
  { label: '45 min', type: 'min', value: 45 },
  { label: '1 hr', type: 'hr', value: 1 },
  { label: '2 hr', type: 'hr', value: 2 },
  { label: '5 hr', type: 'hr', value: 5 },
  { label: '10 hr', type: 'hr', value: 10 },
  { label: '24 hr', type: 'hr', value: 24 },
  { label: '48 hr', type: 'hr', value: 48 },
  { label: '72 hr', type: 'hr', value: 72 },
  { label: '168 hr', type: 'hr', value: 168 },
  { label: '720 hr', type: 'hr', value: 720 },
  { label: '3 day', type: 'day', value: 3 },
  { label: '7 day', type: 'day', value: 7 },
  { label: '14 day', type: 'day', value: 14 },
  { label: '30 day', type: 'day', value: 30 },
  { label: '60 day', type: 'day', value: 60 },
  { label: '90 day', type: 'day', value: 90 },
  { label: '180 day', type: 'day', value: 180 },
  { label: '365 day', type: 'day', value: 365 },
  { label: '1 month', type: 'mon', value: 1 },
  { label: '2 month', type: 'mon', value: 2 },
  { label: '3 month', type: 'mon', value: 3 },
  { label: '6 month', type: 'mon', value: 6 },
  { label: '12 month', type: 'mon', value: 12 }
];

const ITEMS_PER_PAGE = 15;

function unlimitedDurationKeyboard(page = 0) {
  const buttons = [];
  const totalPages = Math.ceil(DURATION_ITEMS.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const end = Math.min(start + ITEMS_PER_PAGE, DURATION_ITEMS.length);
  const pageItems = DURATION_ITEMS.slice(start, end);

  const row = [];
  for (const item of pageItems) {
    const cb = `udur::${item.type}:${item.value}`;
    row.push({ text: item.label, callback_data: cb });
  }
  for (let i = 0; i < row.length; i += 2) {
    buttons.push(row.slice(i, i + 2));
  }

  const nav = [];
  if (page > 0) {
    nav.push({ text: '« PREV', callback_data: `udur_page::${page - 1}` });
  }
  nav.push({ text: `${page + 1}/${totalPages}`, callback_data: 'udur_page::current' });
  if (page < totalPages - 1) {
    nav.push({ text: 'NEXT »', callback_data: `udur_page::${page + 1}` });
  }
  buttons.push(nav);
  buttons.push([{ text: '❌ Cancel', callback_data: 'udur_cancel' }]);

  return { inline_keyboard: buttons };
}

function buildApiSelectionKeyboard(selected) {
  const buttons = [];
  buttons.push([
    { text: '🟢 All Selected', callback_data: 'api_preset::all' },
    { text: '🔴 Clear All', callback_data: 'api_preset::none' }
  ]);
  const combos = {
    '📲 Number': ['num', 'paknum', 'v2num', 'tgid', 'tguser', 'number_adv', 'numverify'],
    '🆔 Aadhar': ['aadhar', 'family', 'adhaar'],
    '🚗 Vehicle': ['vehicle', 'v2num', 'vehicle_adv', 'challan'],
    '💳 GST/PAN': ['gst', 'pan', 'pan_gst', 'gst_basic'],
    '🏦 IFSC': ['ifsc'],
    '🌐 IP/Pincode': ['ip', 'pincode'],
    '📸 Social': ['instagram', 'gmailinfo'],
    '🇵🇰 Pakistan': ['paknum', 'pakcnic', 'pakpolice'],
    '🔍 Leak/Info': ['leakk', 'song', 'paytm', 'upiinfo'],
    '🤖 AI/Git': ['girlfriend', 'github'],
    '📊 Adv Vehicle': ['number_adv', 'vehicle_adv'],
    '📱 Phone Verify': ['numverify']
  };
  const comboRow = [];
  for (const [name, actions] of Object.entries(combos)) {
    const allSelected = actions.every(a => selected.includes(a));
    comboRow.push({ text: (allSelected ? '🟢' : '⚪') + ' ' + name, callback_data: `api_combo::${name}` });
  }
  for (let i = 0; i < comboRow.length; i += 2) {
    buttons.push(comboRow.slice(i, i+2));
  }
  const apiButtons = API_LIST.map(action => ({
    text: (selected.includes(action) ? '🟢' : '⚪') + ' ' + action.toUpperCase(),
    callback_data: `api_toggle::${action}`
  }));
  for (let i = 0; i < apiButtons.length; i += 2) {
    buttons.push(apiButtons.slice(i, i+2));
  }
  buttons.push([{ text: '⚡ DONE - Generate Key ⚡', callback_data: 'api_done' }]);
  buttons.push([{ text: '❌ Cancel Generation', callback_data: 'api_cancel' }]);
  return { inline_keyboard: buttons };
}

// ---------- HELPER: Sanitize external API response ----------
function sanitizeResponse(data) {
  const blacklist = ['credit', 'developer', 'author', 'owner', 'contact', 'footer', 'telegram', 'tg', 'maker', 'created_by'];
  if (Array.isArray(data)) {
    return data.map(item => sanitizeResponse(item));
  }
  if (data && typeof data === 'object') {
    const newObj = {};
    for (const [key, value] of Object.entries(data)) {
      if (blacklist.some(b => key.toLowerCase().includes(b))) continue;
      newObj[key] = sanitizeResponse(value);
    }
    return newObj;
  }
  return data;
}

// ---------- Format tgid response ----------
function formatTgidResponse(data) {
  let info = null;
  let usage = null;
  if (data && typeof data === 'object') {
    if (data.response && data.response.data && Array.isArray(data.response.data) && data.response.data.length > 0) {
      const first = data.response.data[0];
      if (first.fragment && first.fragment.info) {
        info = first.fragment.info;
        usage = first.usage;
      }
    }
    if (!info && (data.username || data.status)) {
      info = data;
    }
  }
  if (info) {
    const result = {
      username: info.username || 'N/A',
      status: info.status || 'Unknown',
      price: info.price || 'Unknown',
      last_buyer: info.last_buyer || 'Unknown',
      description: info.description || ''
    };
    if (usage) {
      result.web_address = usage['Web Address'] || usage.web_address || '';
      result.ton_address = usage['TON Web 3.0 Address'] || usage.ton_address || '';
    }
    return result;
  }
  return sanitizeResponse(data);
}

// ---------- Get blocked keys based on role ----------
async function getBlockedKeysForUser(chatId, env) {
  const isOwn = await isOwner(chatId);
  const isAdm = await isAdmin(chatId, env);
  const isRes = await isReseller(chatId, env);
  
  const allKeys = await env.API_DATA.list({ prefix: 'ALONE_PATEL-' });
  let blockedKeys = [];
  
  for (const item of allKeys.keys) {
    const data = await env.API_DATA.get(item.name, 'json');
    if (data && data.status === 'blocked') {
      if (isOwn) {
        blockedKeys.push({ key: item.name, ...data });
      } else if (isAdm) {
        if (data.user_id != OWNER_ID) {
          blockedKeys.push({ key: item.name, ...data });
        }
      } else if (isRes) {
        if (data.user_id == chatId) {
          blockedKeys.push({ key: item.name, ...data });
        }
      }
    }
  }
  return blockedKeys;
}

// ---------- BOT HANDLER ----------
async function handleBot(request, env) {
  try {
    const body = await request.json();
    if (!body.message && !body.callback_query) return new Response('OK', { status: 200 });

    if (body.message) {
      const msg = body.message;
      const chatId = msg.chat.id;
      const fromId = msg.from.id;
      const username = msg.from.username || '';
      const fullname = (msg.from.first_name || '') + ' ' + (msg.from.last_name || '');
      const text = msg.text ? msg.text.trim() : '';

      const isOwn = await isOwner(fromId);
      const isAdm = await isAdmin(fromId, env);
      const isRes = await isReseller(fromId, env);
      const authorized = isOwn || isAdm || isRes;

      let user = await getUser(fromId, env);
      if (!user.username) {
        user.username = username;
        user.fullname = fullname;
        await env.API_DATA.put(`user:${fromId}`, JSON.stringify(user));
      }

      if (!authorized) {
        if (text === '/testkey') {
          const used = await env.API_DATA.get(`testkey_used:${fromId}`);
          if (used) {
            await sendTelegram(chatId, "❌ You have already used your one-time test key. Contact @ALONE_PATEL for permanent access.", env);
            return new Response('OK', { status: 200 });
          }
          const expiry = new Date();
          expiry.setHours(expiry.getHours() + TEST_KEY_EXPIRY_HOURS);
          const keyData = {
            user_id: fromId,
            daily_limit: 10,
            hourly_limit: 5,
            minute_limit: 2,
            expiry_date: expiry.toISOString().split('T')[0],
            expiry_time: expiry.toISOString(),
            allowed_apis: '*',
            status: 'active'
          };
          const key = generateAPIKey();
          await env.API_DATA.put(key, JSON.stringify(keyData));
          const userKeys = await env.API_DATA.get(`userkeys:${fromId}`, 'json') || [];
          userKeys.push(key);
          await env.API_DATA.put(`userkeys:${fromId}`, JSON.stringify(userKeys));
          await env.API_DATA.put(`testkey_used:${fromId}`, 'true');
          let msg = `🎁 <b>One-Time Test Key Generated!</b>\n\n`;
          msg += `🔑 <b>Key:</b> <code>${key}</code>\n`;
          msg += `📅 <b>Daily Limit:</b> 10\n`;
          msg += `⏱ <b>Hourly Limit:</b> 5\n`;
          msg += `⏳ <b>Minute Limit:</b> 2\n`;
          msg += `📅 <b>Expiry:</b> ${expiry.toLocaleString()} (5 hours from now)\n`;
          msg += `🔧 <b>APIs:</b> All APIs\n\n`;
          msg += `✅ You can now use this key to test the API. After expiry, you will need to contact @ALONE_PATEL for permanent access.`;
          const links = await getApiLinksText(key, '*', env);
          msg += links;
          await sendTelegram(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }

        const notice = `⚠️ <b>Access Denied</b>\n\n` +
                       `You are not authorized to use this bot.\n` +
                       `This is a private bot for authorized users only.\n` +
                       `Please contact the owner @ALONE_PATEL to get access.\n\n` +
                       `If you think this is a mistake, kindly reach out to the developer.\n` +
                       `━━━━━━━━━━✦✗✦━━━━━━━━━━━\n` +
                       `© @ALONE_PATEL - All rights reserved.`;
        const keyboard = {
          inline_keyboard: [
            [{ text: '🎁 Get One-Time Test Key', callback_data: 'testkey_generate' }]
          ]
        };
        await sendTelegram(chatId, notice, env, 'HTML', JSON.stringify(keyboard));
        return new Response('OK', { status: 200 });
      }

      // ---------- AUTHORIZED USERS ----------
      if (text === '/start') {
        const welcome = "╔═══════════════════════╗\n║ 🔥 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 — ♧𝐀𝐋𝐎𝐍𝐄♤𝐏𝐀𝐓𝐄𝐋 ║\n╠═══════════════════════╣\n║ 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐊𝐄𝐘 𝐏𝐀𝐍𝐄𝐋 𝐁𝐎𝐓 \n║ 𝐃𝐌 𝐓𝐎 𝐁𝐔𝐘 :: @ALONE_PATEL \n╚═══════════════════════╝\n\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\nCONTACT (DM): @ALONE_PATEL\n━━━━━━━━━━✦✗✦━━━━━━━━━━━";
        await sendPhoto(chatId, 'https://iili.io/BMKKREv.jpg', welcome, env);
        await sendTelegram(chatId, '<b>Choose an option from colorful menu below:</b>', env, 'HTML', JSON.stringify(mainMenuKeyboard(isAdm, isRes, isOwn)));
        return new Response('OK', { status: 200 });
      }

      // ---------- BUTTON HANDLING ----------
      if (text === '➕ ADD ADMIN' && isOwn) {
        await sendTelegram(chatId, "<b>➕ ADD ADMIN</b>\n\nUsage: <code>/addadmin &lt;chat_id&gt; [expiry]</code>\n\nExamples:\n<code>/addadmin 123456789</code> (no expiry)\n<code>/addadmin 123456789 1d</code> (1 day expiry)\n<code>/addadmin 123456789 1m</code> (1 month expiry)\n<code>/addadmin 123456789 30d</code> (30 days expiry)\n<code>/addadmin 123456789 1y</code> (1 year expiry)\n\n📌 <b>Expiry formats:</b>\n<code>1d</code> = 1 day, <code>5d</code> = 5 days\n<code>1m</code> = 1 month, <code>3m</code> = 3 months\n<code>1y</code> = 1 year, <code>2y</code> = 2 years", env); return new Response('OK', { status: 200 });
      }
      if (text === '➖ REMOVE ADMIN' && isOwn) {
        await sendTelegram(chatId, "<b>➖ REMOVE ADMIN</b>\n\nUsage: <code>/removeadmin &lt;chat_id&gt;</code>\n\nExample: <code>/removeadmin 123456789</code>\n\n⚠️ This will remove admin status and block all their API keys.", env); return new Response('OK', { status: 200 });
      }
      if (text === '➕ ADD RESELLER' && isOwn) {
        await sendTelegram(chatId, "<b>➕ ADD RESELLER</b>\n\nUsage: <code>/addreseller &lt;chat_id&gt; [expiry]</code>\n\nExamples:\n<code>/addreseller 123456789</code> (no expiry)\n<code>/addreseller 123456789 1d</code> (1 day expiry)\n<code>/addreseller 123456789 1m</code> (1 month expiry)\n\n📌 <b>Expiry formats:</b>\n<code>1d</code> = 1 day, <code>5d</code> = 5 days\n<code>1m</code> = 1 month, <code>3m</code> = 3 months\n<code>1y</code> = 1 year, <code>2y</code> = 2 years", env); return new Response('OK', { status: 200 });
      }
      if (text === '➖ REMOVE RESELLER' && isOwn) {
        await sendTelegram(chatId, "<b>➖ REMOVE RESELLER</b>\n\nUsage: <code>/removereseller &lt;chat_id&gt;</code>\n\nExample: <code>/removereseller 123456789</code>\n\n⚠️ This will remove reseller status and block all their API keys.", env); return new Response('OK', { status: 200 });
      }

if (text === '📊 ADMIN STATS' && (isOwn || isAdm)) {
  const keysCount = (await env.API_DATA.list({ prefix: 'ALONE_PATEL-' })).keys.length;
  const usersCount = (await env.API_DATA.list({ prefix: 'user:' })).keys.length;
  const admins = (await getAllAdmins(env)).length;
  const resellers = (await getAllResellers(env)).length;
  await sendTelegram(chatId, `📊 <b>Statistics</b>\n\n🔑 Total Keys: ${keysCount}\n👥 Users: ${usersCount}\n👑 Admins: ${admins}\n🛒 Resellers: ${resellers}`, env);
  return new Response('OK', { status: 200 });
}

if (text === '📋 ADMIN LIST' && (isOwn || isAdm)) {
  const adminIds = await getAllAdmins(env);
  const resellerIds = await getAllResellers(env);
  let msg = "<b>📋 Admin & Reseller List</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
  let inlineKeyboard = [];

  if (adminIds.length === 0 && resellerIds.length === 0) {
    msg = "<b>📋 Admin & Reseller List</b>\n━━━━━━━━━━━━━━━━━━━\n\nNo admins or resellers found.";
    await sendLongMessage(chatId, msg, env);
    return new Response('OK', { status: 200 });
  }

  if (adminIds.length > 0) {
    msg += "<b>👑 Admins:</b>\n";
    for (const cid of adminIds) {
      const u = await getUser(cid, env);
      const keys = await getKeysForUser(cid, env);
      const expiry = await env.API_DATA.get(`role_expiry:${cid}`);
      msg += `🆔 <b>${cid}</b>\n`;
      msg += `👤 Username: ${u.username || 'No username'}\n`;
      msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
      msg += `🔑 Keys: ${keys.length}\n`;
      if (expiry) {
        const expDate = new Date(expiry);
        msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
      } else {
        msg += `⏰ Expiry: Never\n`;
      }
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      inlineKeyboard.push([
        { text: `🔑 Keys for ${u.username || cid}`, callback_data: `show_keys::${cid}` },
        { text: `🔗 Links for ${u.username || cid}`, callback_data: `show_links::${cid}` }
      ]);
    }
  }

  if (resellerIds.length > 0) {
    msg += "\n<b>🛒 Resellers:</b>\n";
    for (const cid of resellerIds) {
      const u = await getUser(cid, env);
      const keys = await getKeysForUser(cid, env);
      const expiry = await env.API_DATA.get(`role_expiry:${cid}`);
      msg += `🆔 <b>${cid}</b>\n`;
      msg += `👤 Username: ${u.username || 'No username'}\n`;
      msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
      msg += `🔑 Keys: ${keys.length}\n`;
      if (expiry) {
        const expDate = new Date(expiry);
        msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
      } else {
        msg += `⏰ Expiry: Never\n`;
      }
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      inlineKeyboard.push([
        { text: `🔑 Keys for ${u.username || cid}`, callback_data: `show_keys::${cid}` },
        { text: `🔗 Links for ${u.username || cid}`, callback_data: `show_links::${cid}` }
      ]);
    }
  }

  msg += "\n<i>Click a button below to see keys or API links for that user.</i>";
  const keyboard = { inline_keyboard: inlineKeyboard };
  await sendLongMessage(chatId, msg, env, 'HTML', JSON.stringify(keyboard));
  return new Response('OK', { status: 200 });
}

      if (text === '📈 RESELLER STATS' && (isOwn || isAdm)) {
  const resellerIds = await getAllResellers(env);
  let msg = "<b>📈 Reseller Stats</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
  let inlineKeyboard = [];
  
  for (const cid of resellerIds) {
    const u = await getUser(cid, env);
    const keys = await getKeysForUser(cid, env);
    const expiry = await env.API_DATA.get(`role_expiry:${cid}`);
    msg += `🆔 <b>${cid}</b>\n`;
    msg += `👤 Username: ${u.username || 'No username'}\n`;
    msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
    msg += `💰 Balance: ${u.balance || 0}\n`;
    msg += `🔑 Keys: ${keys.length}\n`;
    if (expiry) {
      const expDate = new Date(expiry);
      msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
    } else {
      msg += `⏰ Expiry: Never\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    inlineKeyboard.push([
      { text: `🔑 Keys for ${u.username || cid}`, callback_data: `show_keys::${cid}` },
      { text: `🔗 Links for ${u.username || cid}`, callback_data: `show_links::${cid}` }
    ]);
  }
  
  if (inlineKeyboard.length === 0) {
    msg += "No resellers found.";
  } else {
    msg += "\n<i>Click a button below to see keys or API links for that reseller.</i>";
  }
  const keyboard = { inline_keyboard: inlineKeyboard };
  await sendLongMessage(chatId, msg, env, 'HTML', JSON.stringify(keyboard));
  return new Response('OK', { status: 200 });
}

      if (text === '🔍 Get User Keys' && (isOwn || isAdm)) {
  await setState(chatId, { step: 'ask_getkeys_user' }, env);
  await sendTelegram(chatId, "🔍 Please enter the <b>chat_id</b> or <b>@username</b> of the user whose keys you want to see.\n\nExample: <code>123456789</code> or <code>@username</code>\n\nType <code>/cancel</code> to cancel.", env);
  return new Response('OK', { status: 200 });
}

      const state = await getState(chatId, env);
if (state && state.step === 'ask_getkeys_user') {
  const input = text.trim();
  if (input === '/cancel') {
    await clearState(chatId, env);
    await sendTelegram(chatId, "❌ Cancelled.", env);
    return new Response('OK', { status: 200 });
  }
  let target = input;
  if (target.startsWith('@')) {
    const list = await env.API_DATA.list({ prefix: 'user:' });
    for (const item of list.keys) {
      const u = await env.API_DATA.get(item.name, 'json');
      if (u && u.username && u.username.toLowerCase() === target.substring(1).toLowerCase()) {
        target = u.chat_id;
        break;
      }
    }
  }
  const keys = await getKeysForUser(target, env);
  let msg = `<b>🔑 Keys for ${target}</b>\n\n`;
  if (keys.length === 0) {
    msg += "No keys found.";
  } else {
    for (const k of keys) {
      let expiryStr = k.expiry_date || 'Never';
      if (k.expiry_time) {
        const expDate = new Date(k.expiry_time);
        expiryStr = expDate.toLocaleString();
      }
      const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
      msg += `• <b>Key:</b> <code>${k.key}</code>\n`;
      msg += `  └ Daily: ${k.daily_limit}\n`;
      msg += `  └ Hourly: ${k.hourly_limit}\n`;
      msg += `  └ Minute: ${k.minute_limit}\n`;
      msg += `  └ Expiry: ${expiryStr}\n`;
      msg += `  └ Status: ${k.status}\n`;
      msg += `  └ APIs: ${allowed}\n`;
      const links = await getApiLinksText(k.key, k.allowed_apis || '*', env);
      msg += links;
    }
  }
  await clearState(chatId, env);
  await sendLongMessage(chatId, msg, env);
  return new Response('OK', { status: 200 });
}

      if (text === '🚫 BLOCK KEY' && (isAdm || isRes || isOwn)) {
        await sendTelegram(chatId, "<b>🚫 BLOCK KEY</b>\n\nUsage: <code>/blockkey &lt;api_key&gt;</code>\n\nExample: <code>/blockkey ALONE_PATEL-ABC123</code>\n\n⚠️ Blocked keys cannot be used until unblocked.\n\n📌 <b>Note:</b> Resellers can only block their own keys.", env); return new Response('OK', { status: 200 });
      }
      if (text === '✅ UNBLOCK KEY' && (isAdm || isRes || isOwn)) {
        await sendTelegram(chatId, "<b>✅ UNBLOCK KEY</b>\n\nUsage: <code>/unblockkey &lt;api_key&gt;</code>\n\nExample: <code>/unblockkey ALONE_PATEL-ABC123</code>\n\n📌 <b>Note:</b> Resellers can only unblock their own keys.", env); return new Response('OK', { status: 200 });
      }

      if (text === '📜 LIST ADMINS' && (isOwn || isAdm)) {
        const list = await env.API_DATA.list({ prefix: 'role:admin' });
        const ids = list.keys.map(k => k.name.replace('role:admin:', ''));
        if (ids.length === 0) {
          await sendTelegram(chatId, `👑 <b>Admins:</b>\nNone`, env);
        } else {
          let msg = "<b>👑 Admins:</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const id of ids) {
            const u = await getUser(id, env);
            const expiry = await env.API_DATA.get(`role_expiry:${id}`);
            msg += `🆔 <b>${id}</b>\n`;
            msg += `👤 Username: ${u.username || 'No username'}\n`;
            msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
            if (expiry) {
              const expDate = new Date(expiry);
              msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
            } else {
              msg += `⏰ Expiry: Never\n`;
            }
            msg += `━━━━━━━━━━━━━━━━━━━\n`;
          }
          await sendTelegram(chatId, msg, env);
        }
        return new Response('OK', { status: 200 });
      }

if (text === '📜 LIST RESELLERS' && (isOwn || isAdm)) {
  const resellerIds = await getAllResellers(env);
  if (resellerIds.length === 0) {
    await sendLongMessage(chatId, `🛒 <b>Resellers:</b>\nNone`, env);
  } else {
    let msg = "<b>🛒 Resellers:</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
    for (const id of resellerIds) {
      const u = await getUser(id, env);
      const expiry = await env.API_DATA.get(`role_expiry:${id}`);
      msg += `🆔 <b>${id}</b>\n`;
      msg += `👤 Username: ${u.username || 'No username'}\n`;
      msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
      if (expiry) {
        const expDate = new Date(expiry);
        msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
      } else {
        msg += `⏰ Expiry: Never\n`;
      }
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
    }
    await sendLongMessage(chatId, msg, env);
  }
  return new Response('OK', { status: 200 });
}

      if (text.includes('CLICK AND GENERATE KEY')) {
        if (!isRes) {
          await sendTelegram(chatId, '❌ Not authorized to generate keys.', env);
          return new Response('OK', { status: 200 });
        }
        const u = await getUser(fromId, env);
        if ((u.balance || 0) < COST_PER_CALL) {
          await sendTelegram(chatId, `❌ Insufficient balance. Need ${COST_PER_CALL} unit(s). Contact admin to add balance.`, env);
          return new Response('OK', { status: 200 });
        }
        await sendTelegram(chatId, '<b>Select duration below:</b>', env, 'HTML', JSON.stringify(durationInlineKeyboard()));
        return new Response('OK', { status: 200 });
      }

      if (text.includes('UNLIMITED API CREATE')) {
        if (!isRes) {
          await sendTelegram(chatId, '❌ Only resellers and above can generate keys.', env);
          return new Response('OK', { status: 200 });
        }
        await sendTelegram(chatId, '🚀 <b>Unlimited Duration Options</b>\nChoose a duration below:', env, 'HTML', JSON.stringify(unlimitedDurationKeyboard(0)));
        return new Response('OK', { status: 200 });
      }

      if (text.includes('CREATE CUSTOM KEY')) {
        await sendTelegram(chatId, "<b>⚙️ CREATE CUSTOM KEY (Admin/Reseller)</b>\n\nUsage:\n<code>/addkey &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis]</code>\n\nExample:\n<code>/addkey ALONE_PATEL-NEW123 100 20 5 365 gst,pan</code>", env);
        return new Response('OK', { status: 200 });
      }

      if (text.includes('DELETE KEY')) {
        await sendTelegram(chatId, "<b>🗑️ DELETE KEY (Admin)</b>\n\nUsage:\n<code>/deletekey &lt;KEY&gt;</code>\n\nExample:\n<code>/deletekey ALONE_PATEL-ABC123</code>", env);
        return new Response('OK', { status: 200 });
      }

      if (text.includes('ADMIN MENU')) {
        if (!isAdm) { await sendTelegram(chatId, "❌ Unauthorized.", env); return new Response('OK', { status: 200 }); }
        await sendTelegram(chatId, "<b>🛡️ ADMIN MENU</b>\n\nChoose an option below:", env, 'HTML', JSON.stringify(adminMenuKeyboard()));
        return new Response('OK', { status: 200 });
      }

      // My Keys button
      if (text === '🔑 My Keys' || text.includes('My Keys') || text === '/mykeys' || text === '/key') {
        try {
          const keys = await getKeysForUser(fromId, env);
          if (keys.length === 0) {
            await sendTelegram(chatId, "❌ You have no API keys.", env);
            return new Response('OK', { status: 200 });
          }
          let msg = "<b>🔑 Your API Keys:</b>\n\n";
          for (const k of keys) {
            const usage = await env.API_DATA.get(`usage:${k.key}`, 'json') || { daily: 0 };
            let expiryStr = k.expiry_date || 'Never';
            if (k.expiry_time) {
              const expDate = new Date(k.expiry_time);
              expiryStr = expDate.toLocaleString();
            }
            const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
            msg += `• <b>Key:</b> <code>${k.key}</code>\n`;
            msg += `  └ Daily: ${k.daily_limit} (Used: ${usage.daily || 0})\n`;
            msg += `  └ Hourly: ${k.hourly_limit}\n`;
            msg += `  └ Minute: ${k.minute_limit}\n`;
            msg += `  └ Expiry: ${expiryStr}\n`;
            msg += `  └ Status: ${k.status}\n`;
            msg += `  └ APIs: ${allowed}\n`;
            const links = await getApiLinksText(k.key, k.allowed_apis || '*', env);
            msg += links;
          }
          await sendLongMessage(chatId, msg, env);
        } catch (err) {
          console.error("My Keys Error:", err);
          await sendTelegram(chatId, "❌ Error fetching your keys. Please try again later.", env);
        }
        return new Response('OK', { status: 200 });
      }

      // VIEW BLOCKED KEYS button - Role based visibility
      if (text === '📋 VIEW BLOCKED KEYS' || text === '🔍 VIEW BLOCKED KEYS') {
        try {
          const blockedKeys = await getBlockedKeysForUser(fromId, env);
          
          if (blockedKeys.length === 0) {
            let msg = "✅ No blocked keys found.\n\n";
            if (isOwn) msg += "All keys are currently active.";
            else if (isAdm) msg += "No blocked keys found in your scope.";
            else if (isRes) msg += "You have no blocked keys.";
            await sendTelegram(chatId, msg, env);
            return new Response('OK', { status: 200 });
          }
          
          let msg = "🚫 <b>Blocked Keys List</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const bk of blockedKeys) {
            const u = await getUser(bk.user_id, env);
            msg += `🔑 <code>${bk.key}</code>\n`;
            msg += `👤 User: ${bk.user_id} (${u.username || 'No username'})\n`;
            msg += `📅 Daily Limit: ${bk.daily_limit}\n`;
            let expiryStr = bk.expiry_date || 'Never';
            if (bk.expiry_time) {
              const expDate = new Date(bk.expiry_time);
              expiryStr = expDate.toLocaleString();
            }
            msg += `📅 Expiry: ${expiryStr}\n`;
            msg += `━━━━━━━━━━━━━━━━━━━\n`;
          }
          await sendLongMessage(chatId, msg, env);
        } catch (err) {
          console.error("Blocked Keys Error:", err);
          await sendTelegram(chatId, "❌ Error fetching blocked keys. Please try again later.", env);
        }
        return new Response('OK', { status: 200 });
      }

      // /history command
      if (text === '/history') {
        try {
          const logs = await getUserLogs(fromId, env);
          if (logs.length === 0) {
            await sendTelegram(chatId, "📭 No history found.", env);
            return new Response('OK', { status: 200 });
          }
          let msg = "<b>📊 Your Recent API Calls</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const log of logs) {
            msg += `🔑 <b>Key:</b> <code>${log.key}</code>\n`;
            msg += `📌 <b>Action:</b> ${log.action}\n`;
            msg += `📝 <b>Parameter:</b> ${log.param}\n`;
            msg += `🕐 <b>Time:</b> ${new Date(log.time).toLocaleString()}\n`;
            msg += `━━━━━━━━━━━━━━━━━━━\n`;
          }
          await sendLongMessage(chatId, msg, env);
        } catch (err) {
          console.error("History Error:", err);
          await sendTelegram(chatId, "❌ Error fetching history. Please try again later.", env);
        }
        return new Response('OK', { status: 200 });
      }

      if (text.includes('Contact (DM)')) {
        await sendTelegram(chatId, "<b>PRIVATE DM :</b> @ALONE_PATEL\n\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\nCONTACT (DM): @ALONE_PATEL\n━━━━━━━━━━✦✗✦━━━━━━━━━━━", env);
        return new Response('OK', { status: 200 });
      }

      if (text.includes('RESELLER MENU')) {
        if (isRes) {
          await sendTelegram(chatId, "<b>💼 RESELLER MENU</b>", env, 'HTML', JSON.stringify(resellerMenuKeyboard()));
        } else {
          await sendTelegram(chatId, "❌ Unauthorized.", env);
        }
        return new Response('OK', { status: 200 });
      }

      if (text.toUpperCase().includes('MY PROFILE') || text === '/profile') {
        const profileMsg = await formatProfileMessage(fromId, env);
        await sendLongMessage(chatId, profileMsg, env);
        return new Response('OK', { status: 200 });
      }

      if (text === '❓ HELP' || text.toUpperCase().includes('HELP') || text === '/help') {
        const helpMsg = formatHelpMessage(isAdm, isRes, isOwn);
        await sendLongMessage(chatId, helpMsg, env);
        return new Response('OK', { status: 200 });
      }

      if (text.includes('BACK TO MENU')) {
        await clearState(chatId, env);
        await sendTelegram(chatId, "<b>Back to main menu:</b>", env, 'HTML', JSON.stringify(mainMenuKeyboard(isAdm, isRes, isOwn)));
        return new Response('OK', { status: 200 });
      }

      // State for admin key generation target
      const stateExisting = await getState(chatId, env);
      if (stateExisting && stateExisting.step === 'ask_target_user') {
        const targetId = text.trim();
        if (targetId === '/cancel') {
          await clearState(chatId, env);
          await sendTelegram(chatId, "❌ Cancelled.", env);
          return new Response('OK', { status: 200 });
        }
        const { daily, hourly, minute, expiryDays, expiryHours, expiryMinutes, allowed } = stateExisting;
        const newKey = await createAPIKeyForUser(targetId, daily, hourly, minute, expiryDays, expiryHours, expiryMinutes, allowed, env);
        await clearState(chatId, env);
        if (!newKey) {
          await sendTelegram(chatId, `❌ Insufficient balance for user ${targetId}.`, env);
          return new Response('OK', { status: 200 });
        }
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + expiryDays);
        expiryDate.setHours(expiryDate.getHours() + expiryHours);
        expiryDate.setMinutes(expiryDate.getMinutes() + expiryMinutes);
        const allowedDisplay = allowed === '*' ? 'All APIs' : allowed;
        let msg = `✅ <b>Key Generated for user ${targetId}</b>\n\n🔑 <b>Key:</b> <code>${newKey}</code>\n📅 <b>Daily:</b> ${daily}\n⏱ <b>Hourly:</b> ${hourly}\n⏳ <b>Minute:</b> ${minute}\n📅 <b>Expiry:</b> ${expiryDate.toLocaleString()}\n🔧 <b>APIs:</b> ${allowedDisplay}`;
        const links = await getApiLinksText(newKey, allowed, env);
        msg += links;
        await sendLongMessage(chatId, msg, env);
        return new Response('OK', { status: 200 });
      }

      // ---------- COMMANDS ----------
      if (text.startsWith('/')) {
        const parts = text.split(' ');
        const cmd = parts[0];
        const args = parts.slice(1);

        if (cmd === '/help') {
          const helpMsg = formatHelpMessage(isAdm, isRes, isOwn);
          await sendLongMessage(chatId, helpMsg, env);
          return new Response('OK', { status: 200 });
        }
        
        if (cmd === '/key' || cmd === '/mykeys') {
          const keys = await getKeysForUser(fromId, env);
          if (keys.length === 0) { await sendTelegram(chatId, "No keys found.", env); return new Response('OK', { status: 200 }); }
          let msg = "<b>🔑 Your API Keys:</b>\n\n";
          for (const k of keys) {
            const usage = await env.API_DATA.get(`usage:${k.key}`, 'json') || { daily: 0 };
            let expiryStr = k.expiry_date || 'Never';
            if (k.expiry_time) {
              const expDate = new Date(k.expiry_time);
              expiryStr = expDate.toLocaleString();
            }
            const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
            msg += `• <b>Key:</b> <code>${k.key}</code>\n`;
            msg += `  └ Daily: ${k.daily_limit} (Used: ${usage.daily || 0})\n`;
            msg += `  └ Hourly: ${k.hourly_limit}\n`;
            msg += `  └ Minute: ${k.minute_limit}\n`;
            msg += `  └ Expiry: ${expiryStr}\n`;
            msg += `  └ Status: ${k.status}\n`;
            msg += `  └ APIs: ${allowed}\n`;
            const links = await getApiLinksText(k.key, k.allowed_apis || '*', env);
            msg += links;
          }
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }
        
        if (cmd === '/balance') {
          const u = await getUser(fromId, env);
          await sendTelegram(chatId, `💰 <b>Your Balance:</b> ${u.balance || 0} units`, env);
          return new Response('OK', { status: 200 });
        }
        
        if (cmd === '/profile') {
          const profileMsg = await formatProfileMessage(fromId, env);
          await sendLongMessage(chatId, profileMsg, env);
          return new Response('OK', { status: 200 });
        }
        
        if (cmd === '/history') {
          try {
            const logs = await getUserLogs(fromId, env);
            if (logs.length === 0) {
              await sendTelegram(chatId, "📭 No history found.", env);
              return new Response('OK', { status: 200 });
            }
            let msg = "<b>📊 Your Recent API Calls</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
            for (const log of logs) {
              msg += `🔑 <b>Key:</b> <code>${log.key}</code>\n`;
              msg += `📌 <b>Action:</b> ${log.action}\n`;
              msg += `📝 <b>Parameter:</b> ${log.param}\n`;
              msg += `🕐 <b>Time:</b> ${new Date(log.time).toLocaleString()}\n`;
              msg += `━━━━━━━━━━━━━━━━━━━\n`;
            }
            await sendLongMessage(chatId, msg, env);
          } catch (err) {
            console.error("History Error:", err);
            await sendTelegram(chatId, "❌ Error fetching history. Please try again later.", env);
          }
          return new Response('OK', { status: 200 });
        }
        
        if (cmd === '/transfer') {
          await sendTelegram(chatId, "❌ <b>Command Removed</b>\n\nThis command has been disabled. Please use the menu buttons for other actions.", env);
          return new Response('OK', { status: 200 });
        }

        // Admin commands
        if (cmd === '/adduser' && isAdm) {
          if (args.length < 3) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/adduser &lt;chat_id&gt; &lt;username&gt; &lt;fullname&gt;</code>\nExample: <code>/adduser 123456789 alonepatel ALONE PATEL</code>", env); return new Response('OK', { status: 200 }); }
          const user = await getUser(args[0], env);
          user.username = args[1];
          user.fullname = args.slice(2).join(' ');
          await env.API_DATA.put(`user:${args[0]}`, JSON.stringify(user));
          await sendTelegram(chatId, `✅ User ${args[0]} added/updated successfully.\n\n👤 Username: ${args[1]}\n📛 Fullname: ${args.slice(2).join(' ')}`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/removeuser' && isAdm) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/removeuser &lt;chat_id&gt;</code>\nExample: <code>/removeuser 123456789</code>", env); return new Response('OK', { status: 200 }); }
          const user = await getUser(args[0], env);
          await env.API_DATA.delete(`user:${args[0]}`);
          await sendTelegram(chatId, `✅ User ${args[0]} (${user.username || 'No username'}) removed successfully.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/listusers' && isAdm) {
          const list = await env.API_DATA.list({ prefix: 'user:' });
          let msg = "<b>📜 All Users:</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const item of list.keys) {
            const user = await env.API_DATA.get(item.name, 'json');
            if (user) {
              const isAdmin = await isAdmin(user.chat_id, env);
              const isReseller = await isReseller(user.chat_id, env);
              let role = "👤 User";
              if (isAdmin && user.chat_id == OWNER_ID) role = "👑 Owner";
              else if (isAdmin) role = "🛡️ Admin";
              else if (isReseller) role = "💼 Reseller";
              msg += `🆔 <b>${user.chat_id}</b>\n`;
              msg += `👤 Username: ${user.username || 'No username'}\n`;
              msg += `📛 Fullname: ${user.fullname || 'No name'}\n`;
              msg += `💰 Balance: ${user.balance || 0}\n`;
              msg += `🔰 Role: ${role}\n`;
              msg += `━━━━━━━━━━━━━━━━━━━\n`;
            }
          }
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/userinfo' && isAdm) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/userinfo &lt;chat_id&gt;</code>\nExample: <code>/userinfo 123456789</code>", env); return new Response('OK', { status: 200 }); }
          const target = args[0];
          const user = await getUser(target, env);
          const keys = await getKeysForUser(target, env);
          const isAdmin = await isAdmin(target, env);
          const isReseller = await isReseller(target, env);
          let role = "User";
          if (isAdmin && target == OWNER_ID) role = "Owner";
          else if (isAdmin) role = "Admin";
          else if (isReseller) role = "Reseller";
          let msg = `<b>📊 User Info for ${target}</b>\n━━━━━━━━━━━━━━━━━━━\n\n`;
          msg += `👤 Username: ${user.username || 'N/A'}\n`;
          msg += `📛 Fullname: ${user.fullname || 'N/A'}\n`;
          msg += `💰 Balance: ${user.balance || 0}\n`;
          msg += `🔰 Role: ${role}\n`;
          msg += `🔑 Keys: ${keys.length}\n`;
          if (keys.length > 0) {
            msg += `\n<b>Keys:</b>\n`;
            for (const k of keys) {
              msg += `• <code>${k.key}</code> - ${k.status}\n`;
            }
          }
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/setkeylimit' && isAdm) {
          if (args.length < 4) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/setkeylimit &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt;</code>\nExample: <code>/setkeylimit ALONE_PATEL-ABC123 100 20 5</code>", env); return new Response('OK', { status: 200 }); }
          const res = await setKeyLimits(args[0], parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), env);
          if (res) await sendTelegram(chatId, `✅ Limits updated for key <code>${args[0]}</code>.\n\n📅 Daily: ${args[1]}\n⏱ Hourly: ${args[2]}\n⏳ Minute: ${args[3]}`, env);
          else await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/getkey' && isAdm) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/getkey &lt;key&gt;</code>\nExample: <code>/getkey ALONE_PATEL-ABC123</code>", env); return new Response('OK', { status: 200 }); }
          const data = await env.API_DATA.get(args[0], 'json');
          if (!data) { await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env); return new Response('OK', { status: 200 }); }
          const usage = await env.API_DATA.get(`usage:${args[0]}`, 'json') || { daily: 0 };
          let expiryStr = data.expiry_date || 'Never';
          if (data.expiry_time) {
            const expDate = new Date(data.expiry_time);
            expiryStr = expDate.toLocaleString();
          }
          const allowed = data.allowed_apis === '*' ? 'All APIs' : data.allowed_apis;
          let msg = `<b>🔑 Key Info: ${args[0]}</b>\n━━━━━━━━━━━━━━━━━━━\n\n`;
          msg += `👤 User: ${data.user_id}\n`;
          msg += `📊 Daily: ${data.daily_limit} (Used: ${usage.daily || 0})\n`;
          msg += `⏱ Hourly: ${data.hourly_limit}\n`;
          msg += `⏳ Minute: ${data.minute_limit}\n`;
          msg += `📌 Status: ${data.status || 'active'}\n`;
          msg += `📅 Expiry: ${expiryStr}\n`;
          msg += `🔧 Allowed APIs: ${allowed}`;
          const links = await getApiLinksText(args[0], data.allowed_apis || '*', env);
          msg += links;
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/listkeys' && isAdm) {
          const list = await env.API_DATA.list({ prefix: 'ALONE_PATEL-' });
          let msg = "<b>📜 All Keys:</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const item of list.keys) {
            const data = await env.API_DATA.get(item.name, 'json');
            if (data) {
              let expiryStr = data.expiry_date || 'Never';
              if (data.expiry_time) {
                const expDate = new Date(data.expiry_time);
                expiryStr = expDate.toLocaleString();
              }
              const allowed = data.allowed_apis === '*' ? 'All APIs' : data.allowed_apis;
              msg += `🔑 <code>${item.name}</code>\n`;
              msg += `   👤 User: ${data.user_id}\n`;
              msg += `   📌 Status: ${data.status}\n`;
              msg += `   📅 Expiry: ${expiryStr}\n`;
              msg += `   🔧 APIs: ${allowed}\n\n`;
            }
          }
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/setbalance' && isAdm) {
          if (args.length < 2) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/setbalance &lt;chat_id&gt; &lt;amount&gt;</code>\nExample: <code>/setbalance 123456789 100</code>", env); return new Response('OK', { status: 200 }); }
          await setUserBalance(args[0], parseInt(args[1]), env);
          await sendTelegram(chatId, `✅ Balance set to ${args[1]} units for user ${args[0]}.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/resetbalance' && isAdm) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/resetbalance &lt;chat_id&gt;</code>\nExample: <code>/resetbalance 123456789</code>", env); return new Response('OK', { status: 200 }); }
          await setUserBalance(args[0], 10, env);
          await sendTelegram(chatId, `✅ Balance reset to 10 units for user ${args[0]}.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/addbalance' && isAdm) {
          if (args.length < 2) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/addbalance &lt;chat_id&gt; &lt;amount&gt;</code>\nExample: <code>/addbalance 123456789 50</code>", env); return new Response('OK', { status: 200 }); }
          const newB = await updateUserBalance(args[0], parseInt(args[1]), env);
          await sendTelegram(chatId, `✅ Added ${args[1]} units to user ${args[0]}. New balance: ${newB}`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/deduct' && isAdm) {
          if (args.length < 2) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/deduct &lt;chat_id&gt; &lt;amount&gt;</code>\nExample: <code>/deduct 123456789 20</code>", env); return new Response('OK', { status: 200 }); }
          const newB = await updateUserBalance(args[0], -parseInt(args[1]), env);
          await sendTelegram(chatId, `✅ Deducted ${args[1]} units from user ${args[0]}. New balance: ${newB}`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/getkeys' && (isOwn || isAdm)) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/getkeys &lt;chat_id or @username&gt;</code>\nExample: <code>/getkeys 123456789</code> or <code>/getkeys @username</code>", env); return new Response('OK', { status: 200 }); }
          let target = args[0];
          if (target.startsWith('@')) {
            const list = await env.API_DATA.list({ prefix: 'user:' });
            for (const item of list.keys) {
              const u = await env.API_DATA.get(item.name, 'json');
              if (u && u.username && u.username.toLowerCase() === target.substring(1).toLowerCase()) {
                target = u.chat_id;
                break;
              }
            }
          }
          const keys = await getKeysForUser(target, env);
          let msg = `<b>🔑 Keys for ${target}</b>\n━━━━━━━━━━━━━━━━━━━\n\n`;
          if (keys.length === 0) { msg += "No keys found."; }
          for (const k of keys) {
            let expiryStr = k.expiry_date || 'Never';
            if (k.expiry_time) {
              const expDate = new Date(k.expiry_time);
              expiryStr = expDate.toLocaleString();
            }
            const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
            msg += `• <b>Key:</b> <code>${k.key}</code>\n`;
            msg += `  └ Daily: ${k.daily_limit}\n`;
            msg += `  └ Hourly: ${k.hourly_limit}\n`;
            msg += `  └ Minute: ${k.minute_limit}\n`;
            msg += `  └ Expiry: ${expiryStr}\n`;
            msg += `  └ Status: ${k.status}\n`;
            msg += `  └ APIs: ${allowed}\n`;
            const links = await getApiLinksText(k.key, k.allowed_apis || '*', env);
            msg += links;
          }
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }

        // Block/Unblock commands - Role based
        if (cmd === '/blockkey' && (isAdm || isRes || isOwn)) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/blockkey &lt;key&gt;</code>\nExample: <code>/blockkey ALONE_PATEL-ABC123</code>\n\n📌 <b>Note:</b> Resellers can only block their own keys.", env); return new Response('OK', { status: 200 }); }
          
          const keyData = await env.API_DATA.get(args[0], 'json');
          if (!keyData) {
            await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env);
            return new Response('OK', { status: 200 });
          }
          
          if (isRes && !isAdm && !isOwn) {
            if (keyData.user_id != fromId) {
              await sendTelegram(chatId, "❌ You can only block your own keys!", env);
              return new Response('OK', { status: 200 });
            }
          }
          
          const blk = await blockAPIKey(args[0], env);
          if (blk) {
            await sendTelegram(chatId, `✅ Key <code>${args[0]}</code> blocked successfully.\n\n❌ <b>Key is blocked. Contact @ALONE_PATEL to unblock.</b>`, env);
          } else {
            await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env);
          }
          return new Response('OK', { status: 200 });
        }
        
        if (cmd === '/unblockkey' && (isAdm || isRes || isOwn)) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/unblockkey &lt;key&gt;</code>\nExample: <code>/unblockkey ALONE_PATEL-ABC123</code>\n\n📌 <b>Note:</b> Resellers can only unblock their own keys.", env); return new Response('OK', { status: 200 }); }
          
          const keyData = await env.API_DATA.get(args[0], 'json');
          if (!keyData) {
            await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env);
            return new Response('OK', { status: 200 });
          }
          
          if (isRes && !isAdm && !isOwn) {
            if (keyData.user_id != fromId) {
              await sendTelegram(chatId, "❌ You can only unblock your own keys!", env);
              return new Response('OK', { status: 200 });
            }
          }
          
          const unblk = await unblockAPIKey(args[0], env);
          if (unblk) await sendTelegram(chatId, `✅ Key <code>${args[0]}</code> unblocked successfully.`, env);
          else await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env);
          return new Response('OK', { status: 200 });
        }

        // Dynamic API update commands
        if (cmd === '/updateapi' && isAdm) {
          if (args.length < 2) {
            await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/updateapi &lt;action&gt; &lt;new_url&gt;</code>\nExample: <code>/updateapi ifsc https://new-ifsc-api.com/info</code>\n\nAvailable actions: " + API_LIST.join(', '), env);
            return new Response('OK', { status: 200 });
          }
          const action = args[0];
          const newUrl = args.slice(1).join(' ');
          if (!DEFAULT_API_MAP[action]) {
            await sendTelegram(chatId, `❌ Invalid action. Available: ${API_LIST.join(', ')}`, env);
            return new Response('OK', { status: 200 });
          }
          await env.API_DATA.put(`apiconfig:${action}`, newUrl);
          await sendTelegram(chatId, `✅ API endpoint for <b>${action}</b> updated to:\n<code>${newUrl}</code>`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/resetapi' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/resetapi &lt;action&gt;</code>\nExample: <code>/resetapi ifsc</code>\n\nAvailable actions: " + API_LIST.join(', '), env);
            return new Response('OK', { status: 200 });
          }
          const action = args[0];
          if (!DEFAULT_API_MAP[action]) {
            await sendTelegram(chatId, `❌ Invalid action. Available: ${API_LIST.join(', ')}`, env);
            return new Response('OK', { status: 200 });
          }
          await env.API_DATA.delete(`apiconfig:${action}`);
          await sendTelegram(chatId, `✅ API endpoint for <b>${action}</b> reset to default.`, env);
          return new Response('OK', { status: 200 });
        }

        // Custom key generation commands
        if (cmd === '/genkey' && isRes) {
          if (args.length < 4) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/genkey &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis]</code>\nExample: <code>/genkey 100 20 5 365 gst,pan</code>", env); return new Response('OK', { status: 200 }); }
          const allowed = args[4] || '*';
          const newKey = await createAPIKeyForUser(fromId, parseInt(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), 0, 0, allowed, env);
          const expiryDate = new Date();
          expiryDate.setDate(expiryDate.getDate() + parseInt(args[3]));
          const allowedDisplay = allowed === '*' ? 'All APIs' : allowed;
          let msg = `✅ <b>Key Generated Successfully!</b>\n\n👤 <b>By:</b> @${username || fullname}\n🔑 <b>Key:</b> <code>${newKey}</code>\n📅 <b>Daily:</b> ${args[0]}\n⏱ <b>Hourly:</b> ${args[1]}\n⏳ <b>Minute:</b> ${args[2]}\n📅 <b>Expiry:</b> ${expiryDate.toLocaleString()}\n🔧 <b>APIs:</b> ${allowedDisplay}`;
          const links = await getApiLinksText(newKey, allowed, env);
          msg += links;
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/addkey' && isRes) {
          if (args.length < 5) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage:\n<code>/addkey &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis]</code>\n\nExample:\n<code>/addkey ALONE_PATEL-NEW123 50 20 2 3 ifsc,num</code>", env); return new Response('OK', { status: 200 }); }
          const customKey = args[0];
          const allowed = args[5] || '*';
          const expiry = new Date();
          expiry.setDate(expiry.getDate() + parseInt(args[4]));
          const keyData = {
            user_id: fromId,
            daily_limit: parseInt(args[1]),
            hourly_limit: parseInt(args[2]),
            minute_limit: parseInt(args[3]),
            expiry_date: expiry.toISOString().split('T')[0],
            expiry_time: expiry.toISOString(),
            allowed_apis: allowed,
            status: 'active'
          };
          await env.API_DATA.put(customKey, JSON.stringify(keyData));
          const userKeys = await env.API_DATA.get(`userkeys:${fromId}`, 'json') || [];
          userKeys.push(customKey);
          await env.API_DATA.put(`userkeys:${fromId}`, JSON.stringify(userKeys));
          const allowedDisplay = allowed === '*' ? 'All APIs' : allowed;
          let msg = `✅ <b>Custom Key Added Successfully!</b>\n\n👤 <b>By:</b> @${username || fullname}\n🔑 <b>Key:</b> <code>${customKey}</code>\n📅 <b>Daily:</b> ${args[1]}\n⏱ <b>Hourly:</b> ${args[2]}\n⏳ <b>Minute:</b> ${args[3]}\n📅 <b>Expiry:</b> ${expiry.toLocaleString()}\n🔧 <b>APIs:</b> ${allowedDisplay}`;
          const links = await getApiLinksText(customKey, allowed, env);
          msg += links;
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/deletekey' && isAdm) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/deletekey &lt;key&gt;</code>\nExample: <code>/deletekey ALONE_PATEL-ABC123</code>", env); return new Response('OK', { status: 200 }); }
          const del = await deleteAPIKey(args[0], env);
          if (del) await sendTelegram(chatId, `✅ Key <code>${args[0]}</code> deleted successfully.`, env);
          else await sendTelegram(chatId, `❌ Key <code>${args[0]}</code> not found.`, env);
          return new Response('OK', { status: 200 });
        }

        // Owner only commands
        if (cmd === '/addadmin' && isOwn) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/addadmin &lt;chat_id&gt; [expiry]</code>\n\nExamples:\n<code>/addadmin 123456789</code> (no expiry)\n<code>/addadmin 123456789 1d</code> (1 day expiry)\n<code>/addadmin 123456789 1m</code> (1 month expiry)\n<code>/addadmin 123456789 30d</code> (30 days expiry)\n\n📌 <b>Expiry formats:</b>\n<code>1d</code> = 1 day, <code>5d</code> = 5 days\n<code>1m</code> = 1 month, <code>3m</code> = 3 months\n<code>1y</code> = 1 year, <code>2y</code> = 2 years", env); return new Response('OK', { status: 200 }); }
          const target = args[0];
          let days = 0;
          if (args[1]) {
            const expiryStr = args[1];
            const num = parseInt(expiryStr);
            if (expiryStr.endsWith('d')) days = num;
            else if (expiryStr.endsWith('m')) days = num * 30;
            else if (expiryStr.endsWith('y')) days = num * 365;
            else days = num;
          }
          await setRole(target, 'admin', env);
          if (days > 0) {
            const expiry = new Date();
            expiry.setDate(expiry.getDate() + days);
            await env.API_DATA.put(`role_expiry:${target}`, expiry.toISOString());
            const user = await getUser(target, env);
            await sendTelegram(chatId, `✅ <b>Admin Added Successfully!</b>\n\n🆔 User: ${target}\n👤 Username: ${user.username || 'No username'}\n📛 Fullname: ${user.fullname || 'No name'}\n⏰ Expiry: ${expiry.toLocaleString()} (${days} days)\n\n🔑 User now has admin access.`, env);
          } else {
            await env.API_DATA.delete(`role_expiry:${target}`);
            const user = await getUser(target, env);
            await sendTelegram(chatId, `✅ <b>Admin Added Successfully!</b>\n\n🆔 User: ${target}\n👤 Username: ${user.username || 'No username'}\n📛 Fullname: ${user.fullname || 'No name'}\n⏰ Expiry: Never\n\n🔑 User now has admin access.`, env);
          }
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/removeadmin' && isOwn) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/removeadmin &lt;chat_id&gt;</code>\nExample: <code>/removeadmin 123456789</code>\n\n⚠️ This will remove admin status and block all their API keys.", env); return new Response('OK', { status: 200 }); }
          const target = args[0];
          const user = await getUser(target, env);
          const blocked = await blockAllKeysForUser(target, env);
          await removeRole(target, env);
          await env.API_DATA.delete(`role_expiry:${target}`);
          await sendTelegram(chatId, `✅ <b>Admin Removed Successfully!</b>\n\n🆔 User: ${target}\n👤 Username: ${user.username || 'No username'}\n📛 Fullname: ${user.fullname || 'No name'}\n🚫 Keys Blocked: ${blocked}\n\n🔑 User no longer has admin access. All keys are blocked.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/addreseller' && isOwn) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/addreseller &lt;chat_id&gt; [expiry]</code>\n\nExamples:\n<code>/addreseller 123456789</code> (no expiry)\n<code>/addreseller 123456789 1d</code> (1 day expiry)\n<code>/addreseller 123456789 1m</code> (1 month expiry)\n\n📌 <b>Expiry formats:</b>\n<code>1d</code> = 1 day, <code>5d</code> = 5 days\n<code>1m</code> = 1 month, <code>3m</code> = 3 months\n<code>1y</code> = 1 year, <code>2y</code> = 2 years", env); return new Response('OK', { status: 200 }); }
          const target = args[0];
          let days = 0;
          if (args[1]) {
            const expiryStr = args[1];
            const num = parseInt(expiryStr);
            if (expiryStr.endsWith('d')) days = num;
            else if (expiryStr.endsWith('m')) days = num * 30;
            else if (expiryStr.endsWith('y')) days = num * 365;
            else days = num;
          }
          await setRole(target, 'reseller', env);
          if (days > 0) {
            const expiry = new Date();
            expiry.setDate(expiry.getDate() + days);
            await env.API_DATA.put(`role_expiry:${target}`, expiry.toISOString());
            const user = await getUser(target, env);
            await sendTelegram(chatId, `✅ <b>Reseller Added Successfully!</b>\n\n🆔 User: ${target}\n👤 Username: ${user.username || 'No username'}\n📛 Fullname: ${user.fullname || 'No name'}\n⏰ Expiry: ${expiry.toLocaleString()} (${days} days)\n\n🔑 User now has reseller access.`, env);
          } else {
            await env.API_DATA.delete(`role_expiry:${target}`);
            const user = await getUser(target, env);
            await sendTelegram(chatId, `✅ <b>Reseller Added Successfully!</b>\n\n🆔 User: ${target}\n👤 Username: ${user.username || 'No username'}\n📛 Fullname: ${user.fullname || 'No name'}\n⏰ Expiry: Never\n\n🔑 User now has reseller access.`, env);
          }
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/removereseller' && isOwn) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/removereseller &lt;chat_id&gt;</code>\nExample: <code>/removereseller 123456789</code>\n\n⚠️ This will remove reseller status and block all their API keys.", env); return new Response('OK', { status: 200 }); }
          const target = args[0];
          const user = await getUser(target, env);
          const blocked = await blockAllKeysForUser(target, env);
          await removeRole(target, env);
          await env.API_DATA.delete(`role_expiry:${target}`);
          await sendTelegram(chatId, `✅ <b>Reseller Removed Successfully!</b>\n\n🆔 User: ${target}\n👤 Username: ${user.username || 'No username'}\n📛 Fullname: ${user.fullname || 'No name'}\n🚫 Keys Blocked: ${blocked}\n\n🔑 User no longer has reseller access. All keys are blocked.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/stats' && isOwn) {
          const keysCount = (await env.API_DATA.list({ prefix: 'ALONE_PATEL-' })).keys.length;
          const usersCount = (await env.API_DATA.list({ prefix: 'user:' })).keys.length;
          const admins = (await env.API_DATA.list({ prefix: 'role:admin' })).keys.length;
          const resellers = (await env.API_DATA.list({ prefix: 'role:reseller' })).keys.length;
          await sendTelegram(chatId, `📊 <b>Bot Statistics</b>\n━━━━━━━━━━━━━━━━━━━\n\n🔑 Total Keys: ${keysCount}\n👥 Total Users: ${usersCount}\n👑 Admins: ${admins}\n🛒 Resellers: ${resellers}`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/broadcast' && isOwn) {
          if (args.length === 0) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/broadcast &lt;message&gt;</code>\nExample: <code>/broadcast Hello everyone! Server is online.</code>", env); return new Response('OK', { status: 200 }); }
          const broadcastMsg = args.join(' ');
          const users = await env.API_DATA.list({ prefix: 'user:' });
          let count = 0;
          for (const u of users.keys) {
            const cid = u.name.replace('user:', '');
            if (cid) { await sendTelegram(cid, `📢 <b>Broadcast Message</b>\n\n${broadcastMsg}`, env); count++; }
          }
          await sendTelegram(chatId, `✅ Broadcast sent to ${count} users.`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/allstats' && isOwn) {
          const users = await env.API_DATA.list({ prefix: 'user:' });
          let msg = "<b>📊 All Users Stats</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const item of users.keys) {
            const u = await env.API_DATA.get(item.name, 'json');
            if (u) {
              const isAdmin = await isAdmin(u.chat_id, env);
              const isReseller = await isReseller(u.chat_id, env);
              let role = "User";
              if (isAdmin && u.chat_id == OWNER_ID) role = "Owner";
              else if (isAdmin) role = "Admin";
              else if (isReseller) role = "Reseller";
              msg += `🆔 ${u.chat_id}\n`;
              msg += `👤 ${u.username || 'No username'}\n`;
              msg += `💰 Balance: ${u.balance || 0}\n`;
              msg += `🔰 Role: ${role}\n\n`;
            }
          }
          await sendLongMessage(chatId, msg, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/removeuserkeys' && isOwn) {
          if (args.length < 1) { await sendTelegram(chatId, "❌ <b>Invalid Usage</b>\n\nUsage: <code>/removeuserkeys &lt;chat_id&gt;</code>\nExample: <code>/removeuserkeys 123456789</code>\n\n⚠️ This will block all keys of the specified user.", env); return new Response('OK', { status: 200 }); }
          const target = args[0];
          const blocked = await blockAllKeysForUser(target, env);
          await sendTelegram(chatId, `✅ All keys of user ${target} have been blocked. (${blocked} keys blocked)`, env);
          return new Response('OK', { status: 200 });
        }
        if (cmd === '/adminlist' && (isOwn || isAdm)) {
          const adminList = await env.API_DATA.list({ prefix: 'role:admin' });
          const resellerList = await env.API_DATA.list({ prefix: 'role:reseller' });
          let msg = "<b>📋 Admin & Reseller List</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          let inlineKeyboard = [];
          
          if (adminList.keys.length === 0 && resellerList.keys.length === 0) {
            msg = "<b>📋 Admin & Reseller List</b>\n━━━━━━━━━━━━━━━━━━━\n\nNo admins or resellers found.";
            await sendTelegram(chatId, msg, env);
            return new Response('OK', { status: 200 });
          }
          
          if (adminList.keys.length > 0) {
            msg += "<b>👑 Admins:</b>\n";
            for (const item of adminList.keys) {
              const cid = item.name.replace('role:admin:', '');
              const u = await getUser(cid, env);
              const keys = await getKeysForUser(cid, env);
              const expiry = await env.API_DATA.get(`role_expiry:${cid}`);
              msg += `🆔 <b>${cid}</b>\n`;
              msg += `👤 Username: ${u.username || 'No username'}\n`;
              msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
              msg += `🔑 Keys: ${keys.length}\n`;
              if (expiry) {
                const expDate = new Date(expiry);
                msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
              } else {
                msg += `⏰ Expiry: Never\n`;
              }
              msg += `━━━━━━━━━━━━━━━━━━━\n`;
              inlineKeyboard.push([
                { text: `🔑 Keys for ${u.username || cid}`, callback_data: `show_keys::${cid}` },
                { text: `🔗 Links for ${u.username || cid}`, callback_data: `show_links::${cid}` }
              ]);
            }
          }
          
          if (resellerList.keys.length > 0) {
            msg += "\n<b>🛒 Resellers:</b>\n";
            for (const item of resellerList.keys) {
              const cid = item.name.replace('role:reseller:', '');
              const u = await getUser(cid, env);
              const keys = await getKeysForUser(cid, env);
              const expiry = await env.API_DATA.get(`role_expiry:${cid}`);
              msg += `🆔 <b>${cid}</b>\n`;
              msg += `👤 Username: ${u.username || 'No username'}\n`;
              msg += `📛 Fullname: ${u.fullname || 'No name'}\n`;
              msg += `🔑 Keys: ${keys.length}\n`;
              if (expiry) {
                const expDate = new Date(expiry);
                msg += `⏰ Expiry: ${expDate.toLocaleString()}\n`;
              } else {
                msg += `⏰ Expiry: Never\n`;
              }
              msg += `━━━━━━━━━━━━━━━━━━━\n`;
              inlineKeyboard.push([
                { text: `🔑 Keys for ${u.username || cid}`, callback_data: `show_keys::${cid}` },
                { text: `🔗 Links for ${u.username || cid}`, callback_data: `show_links::${cid}` }
              ]);
            }
          }
          
          msg += "\n<i>Click a button below to see keys or API links for that user.</i>";
          const keyboard = { inline_keyboard: inlineKeyboard };
          await sendTelegram(chatId, msg, env, 'HTML', keyboard);
          return new Response('OK', { status: 200 });
        }
      }
    }

    // ---------- CALLBACK QUERY ----------
    if (body.callback_query) {
      const cb = body.callback_query;
      const chatId = cb.message.chat.id;
      const fromId = cb.from.id;
      const data = cb.data || '';
      const callbackId = cb.id;

// Handle long message preference
if (data.startsWith('file_pref::')) {
  const parts = data.split('::');
  const pref = parts[1];
  const state = await getState(chatId, env);
  
  if (!state || state.step !== 'long_message_pending') {
    await answerCallback(callbackId, 'Session expired. Please try again.', env);
    return new Response('OK', { status: 200 });
  }

  if (pref === 'file') {
    const chatIdStr = String(chatId);
    const filename = `${chatIdStr}_data.txt`;
    await sendAsFile(chatId, state.message, env, filename);
    await answerCallback(callbackId, 'File sent!', env);
  } else {
    await sendAsParts(chatId, state.message, env, state.parse_mode, state.reply_markup);
    await answerCallback(callbackId, `Data sent in ${Math.ceil(state.message.length / MAX_MESSAGE_LENGTH)} parts!`, env);
  }
  
  await clearState(chatId, env);
  return new Response('OK', { status: 200 });
}

      // Handle test key generation callback for unauthorized users
      if (data === 'testkey_generate') {
        const isOwn = await isOwner(fromId);
        const isAdm = await isAdmin(fromId, env);
        const isRes = await isReseller(fromId, env);
        if (isOwn || isAdm || isRes) {
          await answerCallback(callbackId, 'You already have full access.', env);
          return new Response('OK', { status: 200 });
        }
        const used = await env.API_DATA.get(`testkey_used:${fromId}`);
        if (used) {
          await answerCallback(callbackId, 'You have already used your one-time test key.', env);
          return new Response('OK', { status: 200 });
        }
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + TEST_KEY_EXPIRY_HOURS);
        const keyData = {
          user_id: fromId,
          daily_limit: 10,
          hourly_limit: 5,
          minute_limit: 2,
          expiry_date: expiry.toISOString().split('T')[0],
          expiry_time: expiry.toISOString(),
          allowed_apis: '*',
          status: 'active'
        };
        const key = generateAPIKey();
        await env.API_DATA.put(key, JSON.stringify(keyData));
        const userKeys = await env.API_DATA.get(`userkeys:${fromId}`, 'json') || [];
        userKeys.push(key);
        await env.API_DATA.put(`userkeys:${fromId}`, JSON.stringify(userKeys));
        await env.API_DATA.put(`testkey_used:${fromId}`, 'true');
        let msg = `🎁 <b>One-Time Test Key Generated!</b>\n\n`;
        msg += `🔑 <b>Key:</b> <code>${key}</code>\n`;
        msg += `📅 <b>Daily Limit:</b> 10\n`;
        msg += `⏱ <b>Hourly Limit:</b> 5\n`;
        msg += `⏳ <b>Minute Limit:</b> 2\n`;
        msg += `📅 <b>Expiry:</b> ${expiry.toLocaleString()} (5 hours from now)\n`;
        msg += `🔧 <b>APIs:</b> All APIs\n\n`;
        msg += `✅ You can now use this key to test the API. After expiry, you will need to contact @ALONE_PATEL for permanent access.`;
        const links = await getApiLinksText(key, '*', env);
        msg += links;
        await editTelegram(chatId, cb.message.message_id, msg, env, 'HTML', null);
        await answerCallback(callbackId, 'Test key generated!', env);
        return new Response('OK', { status: 200 });
      }

      // Handle "Show Keys" callback
if (data.startsWith('show_keys::')) {
  const target = data.replace('show_keys::', '');
  const keys = await getKeysForUser(target, env);
  let msg = `<b>🔑 Keys for user ${target}</b>\n━━━━━━━━━━━━━━━━━━━\n\n`;
  if (keys.length === 0) {
    msg += "No keys found for this user.";
  } else {
    for (const k of keys) {
      let expiryStr = k.expiry_date || 'Never';
      if (k.expiry_time) {
        const expDate = new Date(k.expiry_time);
        expiryStr = expDate.toLocaleString();
      }
      const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
      msg += `• <b>Key:</b> <code>${k.key}</code>\n`;
      msg += `  └ Daily: ${k.daily_limit}\n`;
      msg += `  └ Hourly: ${k.hourly_limit}\n`;
      msg += `  └ Minute: ${k.minute_limit}\n`;
      msg += `  └ Expiry: ${expiryStr}\n`;
      msg += `  └ Status: ${k.status}\n`;
      msg += `  └ APIs: ${allowed}\n\n`;
    }
  }
  await sendLongMessage(chatId, msg, env);
  await answerCallback(callbackId, 'Keys sent!', env);
  return new Response('OK', { status: 200 });
}

      // Handle "Show Links" callback
      if (data.startsWith('show_links::')) {
        const target = data.replace('show_links::', '');
        const keys = await getKeysForUser(target, env);
        let msg = `<b>🔗 API Links for user ${target}</b>\n━━━━━━━━━━━━━━━━━━━\n\n`;
        if (keys.length === 0) {
          msg += "No keys found for this user.";
        } else {
          for (const k of keys) {
            const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
            msg += `• <b>Key:</b> <code>${k.key}</code>\n`;
            msg += `  └ Status: ${k.status}\n`;
            msg += `  └ APIs: ${allowed}\n`;
            const links = await getApiLinksText(k.key, k.allowed_apis || '*', env);
            msg += links;
          }
        }
        await sendLongMessage(chatId, msg, env);
        await answerCallback(callbackId, 'Links sent!', env);
        return new Response('OK', { status: 200 });
      }

      // Authorize callback user for other actions
      const isOwn = await isOwner(fromId);
      const isAdm = await isAdmin(fromId, env);
      const isRes = await isReseller(fromId, env);
      if (!(isOwn || isAdm || isRes)) {
        await answerCallback(callbackId, 'Unauthorized. Contact @ALONE_PATEL', env);
        return new Response('OK', { status: 200 });
      }

      // ---------- UNLIMITED DURATION PAGINATION ----------
      if (data.startsWith('udur_page::')) {
        const pageStr = data.replace('udur_page::', '');
        if (pageStr === 'current') {
          await answerCallback(callbackId, 'Current page', env);
          return new Response('OK', { status: 200 });
        }
        const page = parseInt(pageStr);
        if (!isNaN(page) && page >= 0) {
          await editTelegram(chatId, cb.message.message_id, '🚀 <b>Unlimited Duration Options</b>\nChoose a duration below:', env, 'HTML', unlimitedDurationKeyboard(page));
          await answerCallback(callbackId, `Page ${page+1}`, env);
        } else {
          await answerCallback(callbackId, 'Invalid page', env);
        }
        return new Response('OK', { status: 200 });
      }

      // ---------- UNLIMITED DURATION SELECTION ----------
      if (data.startsWith('udur::')) {
        const rest = data.replace('udur::', '');
        const parts = rest.split(':');
        if (parts.length === 2) {
          const type = parts[0];
          const value = parseInt(parts[1]);
          let expiryDays = 0, expiryHours = 0, expiryMinutes = 0;
          let daily = 100, hourly = 20, minute = 5;

          if (type === 'unlimited') {
            daily = 999999;
            hourly = 99999;
            minute = 9999;
            expiryDays = 365;
          } else if (type === 'min') {
            expiryMinutes = value;
            if (value <= 30) { daily = 10; hourly = 5; minute = 2; }
            else if (value <= 60) { daily = 20; hourly = 10; minute = 5; }
            else { daily = 50; hourly = 15; minute = 5; }
          } else if (type === 'hr') {
            expiryHours = value;
            if (value <= 2) { daily = 20; hourly = 10; minute = 5; }
            else if (value <= 10) { daily = 50; hourly = 20; minute = 10; }
            else if (value <= 48) { daily = 100; hourly = 30; minute = 15; }
            else { daily = 200; hourly = 50; minute = 20; }
          } else if (type === 'day') {
            expiryDays = value;
            if (value <= 7) { daily = 100; hourly = 30; minute = 15; }
            else if (value <= 30) { daily = 200; hourly = 50; minute = 20; }
            else if (value <= 90) { daily = 500; hourly = 100; minute = 30; }
            else { daily = 1000; hourly = 200; minute = 50; }
          } else if (type === 'mon') {
            expiryDays = value * 30;
            daily = 2000; hourly = 300; minute = 60;
          }

          const state = {
            step: 'select_apis',
            daily: daily,
            hourly: hourly,
            minute: minute,
            expiryDays: expiryDays,
            expiryHours: expiryHours,
            expiryMinutes: expiryMinutes,
            selectedApis: [],
            durationLabel: type === 'unlimited' ? '♾️ Unlimited' : `${value} ${type}`
          };
          await setState(chatId, state, env);
          await editTelegram(chatId, cb.message.message_id, `🔧 <b>Select APIs</b>\nDuration: ${state.durationLabel}\nDaily limit: ${daily}\nHourly: ${hourly}\nMinute: ${minute}\nExpiry: ${expiryDays}d ${expiryHours}h ${expiryMinutes}m\n\nToggle APIs below, then click DONE.`, env, 'HTML', buildApiSelectionKeyboard([]));
          await answerCallback(callbackId, `Selected ${state.durationLabel}`, env);
          return new Response('OK', { status: 200 });
        }
      }

      if (data === 'udur_cancel') {
        await clearState(chatId, env);
        await sendTelegram(chatId, "❌ Cancelled.", env);
        await answerCallback(callbackId, 'Cancelled', env);
        return new Response('OK', { status: 200 });
      }

      // ---------- EXISTING DURATION HANDLING ----------
      if (data.startsWith('dur::')) {
        const label = data.replace('dur::', '');
        const map = {
          '2 Hours': { daily: 100, hourly: 20, minute: 5, expiryDays: 0, expiryHours: 2, expiryMinutes: 0 },
          '5 Hours': { daily: 100, hourly: 20, minute: 5, expiryDays: 0, expiryHours: 5, expiryMinutes: 0 },
          '1 Day': { daily: 100, hourly: 20, minute: 5, expiryDays: 1, expiryHours: 0, expiryMinutes: 0 },
          '3 Days': { daily: 100, hourly: 20, minute: 5, expiryDays: 3, expiryHours: 0, expiryMinutes: 0 },
          '1 Week': { daily: 100, hourly: 20, minute: 5, expiryDays: 7, expiryHours: 0, expiryMinutes: 0 },
          '2 Weeks': { daily: 100, hourly: 20, minute: 5, expiryDays: 14, expiryHours: 0, expiryMinutes: 0 },
          '15 Days': { daily: 150, hourly: 30, minute: 10, expiryDays: 15, expiryHours: 0, expiryMinutes: 0 },
          '1 Month': { daily: 200, hourly: 50, minute: 20, expiryDays: 30, expiryHours: 0, expiryMinutes: 0 },
          '2 Months': { daily: 300, hourly: 75, minute: 30, expiryDays: 60, expiryHours: 0, expiryMinutes: 0 },
          '3 Months': { daily: 500, hourly: 100, minute: 40, expiryDays: 90, expiryHours: 0, expiryMinutes: 0 },
          '6 Months': { daily: 800, hourly: 150, minute: 60, expiryDays: 180, expiryHours: 0, expiryMinutes: 0 },
          '12 Months': { daily: 1000, hourly: 200, minute: 80, expiryDays: 365, expiryHours: 0, expiryMinutes: 0 },
          '100 / 1 Day': { daily: 100, hourly: 20, minute: 5, expiryDays: 1, expiryHours: 0, expiryMinutes: 0 },
          '500 / 3 Days': { daily: 500, hourly: 50, minute: 10, expiryDays: 3, expiryHours: 0, expiryMinutes: 0 },
          '1000 / 7 Days': { daily: 1000, hourly: 100, minute: 20, expiryDays: 7, expiryHours: 0, expiryMinutes: 0 }
        };
        const selected = map[label] || { daily: 100, hourly: 20, minute: 5, expiryDays: 7, expiryHours: 0, expiryMinutes: 0 };
        const state = {
          step: 'select_apis',
          daily: selected.daily, hourly: selected.hourly, minute: selected.minute,
          expiryDays: selected.expiryDays, expiryHours: selected.expiryHours, expiryMinutes: selected.expiryMinutes,
          selectedApis: [], durationLabel: label
        };
        await setState(chatId, state, env);
        await editTelegram(chatId, cb.message.message_id, `🔧 <b>Select APIs</b>\nDuration: ${label}\nDaily limit: ${selected.daily}\nHourly: ${selected.hourly}\nMinute: ${selected.minute}\nExpiry: ${selected.expiryDays}d ${selected.expiryHours}h ${selected.expiryMinutes}m\n\nToggle APIs below, then click DONE.`, env, 'HTML', buildApiSelectionKeyboard([]));
        await answerCallback(callbackId, 'Now select APIs', env);
        return new Response('OK', { status: 200 });
      }

      // ---------- API TOGGLE, PRESET, COMBO, DONE, CANCEL ----------
      if (data.startsWith('api_toggle::')) {
        const action = data.replace('api_toggle::', '');
        const state = await getState(chatId, env);
        if (!state || state.step !== 'select_apis') {
          await answerCallback(callbackId, 'Session expired.', env);
          return new Response('OK', { status: 200 });
        }
        const selected = state.selectedApis || [];
        const idx = selected.indexOf(action);
        if (idx > -1) selected.splice(idx, 1);
        else selected.push(action);
        state.selectedApis = selected;
        await setState(chatId, state, env);
        await editTelegram(chatId, cb.message.message_id, `🔧 <b>Select APIs</b>\nDuration: ${state.durationLabel}\nSelected: ${selected.join(', ') || 'None'}`, env, 'HTML', buildApiSelectionKeyboard(selected));
        await answerCallback(callbackId, `Toggled ${action}`, env);
        return new Response('OK', { status: 200 });
      }

      if (data.startsWith('api_preset::')) {
        const preset = data.replace('api_preset::', '');
        const state = await getState(chatId, env);
        if (!state) { await answerCallback(callbackId, 'Session expired.', env); return new Response('OK', { status: 200 }); }
        if (preset === 'all') state.selectedApis = API_LIST.slice();
        else if (preset === 'none') state.selectedApis = [];
        await setState(chatId, state, env);
        await editTelegram(chatId, cb.message.message_id, `🔧 <b>Select APIs</b>\nDuration: ${state.durationLabel}\nSelected: ${state.selectedApis.join(', ') || 'None'}`, env, 'HTML', buildApiSelectionKeyboard(state.selectedApis));
        await answerCallback(callbackId, `Preset: ${preset}`, env);
        return new Response('OK', { status: 200 });
      }

      if (data.startsWith('api_combo::')) {
        const comboName = data.replace('api_combo::', '');
        const combos = {
          '📲 Number': ['num', 'paknum', 'v2num', 'tgid', 'tguser', 'number_adv', 'numverify'],
          '🆔 Aadhar': ['aadhar', 'family', 'adhaar'],
          '🚗 Vehicle': ['vehicle', 'v2num', 'vehicle_adv', 'challan'],
          '💳 GST/PAN': ['gst', 'pan', 'pan_gst', 'gst_basic'],
          '🏦 IFSC': ['ifsc'],
          '🌐 IP/Pincode': ['ip', 'pincode'],
          '📸 Social': ['instagram', 'gmailinfo'],
          '🇵🇰 Pakistan': ['paknum', 'pakcnic', 'pakpolice'],
          '🔍 Leak/Info': ['leakk', 'song', 'paytm', 'upiinfo'],
          '🤖 AI/Git': ['girlfriend', 'github'],
          '📊 Adv Vehicle': ['number_adv', 'vehicle_adv'],
          '📱 Phone Verify': ['numverify']
        };
        const actions = combos[comboName] || [];
        const state = await getState(chatId, env);
        if (!state) { await answerCallback(callbackId, 'Session expired.', env); return new Response('OK', { status: 200 }); }
        const selected = state.selectedApis || [];
        const allSelected = actions.every(a => selected.includes(a));
        if (allSelected) {
          for (const a of actions) {
            const idx = selected.indexOf(a);
            if (idx > -1) selected.splice(idx, 1);
          }
        } else {
          for (const a of actions) {
            if (!selected.includes(a)) selected.push(a);
          }
        }
        state.selectedApis = selected;
        await setState(chatId, state, env);
        await editTelegram(chatId, cb.message.message_id, `🔧 <b>Select APIs</b>\nDuration: ${state.durationLabel}\nSelected: ${selected.join(', ') || 'None'}`, env, 'HTML', buildApiSelectionKeyboard(selected));
        await answerCallback(callbackId, `Combo: ${comboName}`, env);
        return new Response('OK', { status: 200 });
      }

      if (data === 'api_done') {
        const state = await getState(chatId, env);
        if (!state || state.step !== 'select_apis') {
          await answerCallback(callbackId, 'Session expired.', env);
          return new Response('OK', { status: 200 });
        }
        const selected = state.selectedApis || [];
        if (selected.length === 0) {
          await answerCallback(callbackId, 'Please select at least one API.', env);
          return new Response('OK', { status: 200 });
        }
        const allowed = selected.join(',');
        const isAdm = await isAdmin(fromId, env);
        if (isAdm) {
          state.step = 'ask_target_user';
          state.allowed = allowed;
          await setState(chatId, state, env);
          await sendTelegram(chatId, "<b>Enter the chat_id of the user for whom you want to generate this key.</b>\n\n <code>8317235185</code>\n\nType <code>/cancel</code> to cancel.", env);
          await answerCallback(callbackId, 'Enter target chat_id', env);
          return new Response('OK', { status: 200 });
        } else {
          const { daily, hourly, minute, expiryDays, expiryHours, expiryMinutes } = state;
          const u = await getUser(fromId, env);
          if ((u.balance || 0) < COST_PER_CALL) {
            await sendTelegram(chatId, "❌ Insufficient balance.", env);
            await answerCallback(callbackId, 'Insufficient balance', env);
            return new Response('OK', { status: 200 });
          }
          await updateUserBalance(fromId, -COST_PER_CALL, env);
          const newKey = await createAPIKeyForUser(fromId, daily, hourly, minute, expiryDays, expiryHours, expiryMinutes, allowed, env);
          await clearState(chatId, env);
          const expiryDate = new Date();
          expiryDate.setDate(expiryDate.getDate() + expiryDays);
          expiryDate.setHours(expiryDate.getHours() + expiryHours);
          expiryDate.setMinutes(expiryDate.getMinutes() + expiryMinutes);
          const allowedDisplay = allowed === '*' ? 'All APIs' : allowed;
          let msg = `✅ <b>Key Generated!</b>\n\n🔑 <b>Key:</b> <code>${newKey}</code>\n📅 <b>Daily:</b> ${daily}\n⏱ <b>Hourly:</b> ${hourly}\n⏳ <b>Minute:</b> ${minute}\n📅 <b>Expiry:</b> ${expiryDate.toLocaleString()}\n🔧 <b>APIs:</b> ${allowedDisplay}`;
          const links = await getApiLinksText(newKey, allowed, env);
          msg += links;
          await sendLongMessage(chatId, msg, env);
          await answerCallback(callbackId, 'Key generated!', env);
          return new Response('OK', { status: 200 });
        }
      }

      if (data === 'api_cancel') {
        await clearState(chatId, env);
        await sendTelegram(chatId, "❌ Cancelled.", env);
        await answerCallback(callbackId, 'Cancelled', env);
        return new Response('OK', { status: 200 });
      }

      console.log("Unknown callback data:", data);
      await answerCallback(callbackId, 'Unknown action. Please try again.', env);
      return new Response('OK', { status: 200 });
    }
  } catch (err) {
    console.error("Bot Handler Error:", err);
  }
  return new Response('OK', { status: 200 });
}

// ---------- MAIN WORKER ----------
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/bot' && request.method === 'POST') {
      return handleBot(request, env);
    }
    if (path === '/') {
      return Response.json({ status: true, message: 'API is running', credit: CREDIT }, { status: 200 });
    }
    if (path === '/details' && request.method === 'GET') {
      const key = url.searchParams.get('key');
      if (!key) {
        return Response.json({ success: false, message: 'Missing key parameter' }, { status: 400 });
      }
      const data = await env.API_DATA.get(key, 'json');
      if (!data) {
        return Response.json({ success: false, message: 'Key not found Please Check Your Original Key.' }, { status: 404 });
      }
      let expiryTime = data.expiry_time ? new Date(data.expiry_time) : null;
      if (expiryTime && expiryTime < new Date()) {
        data.status = 'expired';
      }
      const usage = await env.API_DATA.get(`usage:${key}`, 'json') || { daily: 0 };
      const keyDetails = buildKeyDetails(data, usage);
      return Response.json({
        success: true,
        key: key,
        status: data.status,
        expiry: expiryTime ? expiryTime.toISOString() : null,
        limits: { daily: data.daily_limit, hourly: data.hourly_limit, minute: data.minute_limit },
        usage: keyDetails,
        allowed_apis: data.allowed_apis || '*',
        user_id: data.user_id
      });
    }

    // API Gateway
    if (path !== '/api' && path !== '/api/') {
      return Response.json({ status: false, message: 'Not Found', credit: CREDIT }, { status: 404 });
    }

    const apiKey = url.searchParams.get('key') || url.searchParams.get('api_key') || '';
    let action = url.searchParams.get('action') || '';
    if (!action && url.searchParams.has('number')) {
      action = 'num';
    }

    if (!apiKey) {
      return Response.json({ status: false, message: 'Missing API key Please Check Your Original Key.', credit: CREDIT }, { status: 400 });
    }

    const keyData = await getKeyData(apiKey, env);
    if (!keyData) {
      return Response.json({ status: false, message: 'Invalid API key Please Check Your Original Key.', credit: CREDIT }, { status: 401 });
    }
    if (keyData.status !== 'active') {
      const usage = await env.API_DATA.get(`usage:${apiKey}`, 'json') || { daily: 0 };
      const keyDetails = buildKeyDetails(keyData, usage);
      return Response.json({
        status: false,
        message: `Your API key has been blocked by the Owner. Contact @ALONE_PATEL to unblock.`,
        key_details: keyDetails,
        credit: CREDIT
      }, { status: 403 });
    }

    const now = new Date();
    let expiryTime = keyData.expiry_time ? new Date(keyData.expiry_time) : (keyData.expiry_date ? new Date(keyData.expiry_date + 'T23:59:59') : null);
    if (expiryTime && expiryTime < now) {
      const usage = await env.API_DATA.get(`usage:${apiKey}`, 'json') || { daily: 0 };
      const keyDetails = buildKeyDetails(keyData, usage);
      return Response.json({ 
        status: false, 
        message: `API key expired on ${expiryTime.toLocaleString()}`,
        key_details: keyDetails,
        credit: CREDIT 
      }, { status: 403 });
    }

    if (keyData.allowed_apis !== '*') {
      const allowed = keyData.allowed_apis.split(',');
      if (!allowed.includes(action)) {
        return Response.json({ status: false, message: 'This API action is not allowed', credit: CREDIT }, { status: 403 });
      }
    }

    if (!action || !DEFAULT_API_MAP[action]) {
      return Response.json({ status: false, message: 'Invalid action', credit: CREDIT }, { status: 400 });
    }

    const paramKey = PARAM_MAP[action] || action;
    const paramValue = url.searchParams.get(paramKey) || '';
    if (!paramValue) {
      return Response.json({ status: false, message: `Missing parameter: ${paramKey}`, credit: CREDIT }, { status: 400 });
    }

    let baseUrl = await getApiBase(action, env);
    const separator = baseUrl.includes('?') ? '&' : '?';
    const targetUrl = `${baseUrl}${separator}${encodeURIComponent(paramKey)}=${encodeURIComponent(paramValue)}`;

    let usage = await updateUsage(apiKey, env);
    if (usage) {
      if (usage.minuteCount > keyData.minute_limit) {
        const keyDetails = buildKeyDetails(keyData, usage);
        return Response.json({
          status: false,
          message: 'Minute limit exceeded',
          limit_details: keyDetails,
          credit: CREDIT
        }, { status: 429 });
      }
      if (usage.hourly > keyData.hourly_limit) {
        const keyDetails = buildKeyDetails(keyData, usage);
        return Response.json({
          status: false,
          message: 'Hourly limit exceeded',
          limit_details: keyDetails,
          credit: CREDIT
        }, { status: 429 });
      }
      if (usage.daily > keyData.daily_limit) {
        const keyDetails = buildKeyDetails(keyData, usage);
        return Response.json({
          status: false,
          message: 'Daily limit exceeded',
          limit_details: keyDetails,
          credit: CREDIT
        }, { status: 429 });
      }
    }

    try {
      await logAPICall(apiKey, action, paramValue, env);
      const resp = await fetch(targetUrl);
      const contentType = resp.headers.get('content-type') || '';
      let data;
      if (contentType.includes('application/json')) {
        data = await resp.json();
        data = sanitizeResponse(data);
      } else {
        data = await resp.text();
      }

      let noData = false;
      if (resp.status === 404 || resp.status === 400) {
        noData = true;
      } else if (typeof data === 'object' && data !== null) {
        if (Array.isArray(data) && data.length === 0) noData = true;
        else if (!Array.isArray(data) && Object.keys(data).length === 0) noData = true;
        else if (data.status === false && data.message && data.message.toLowerCase().includes('not found')) noData = true;
        else if (data.error && data.error.toLowerCase().includes('not found')) noData = true;
      } else if (typeof data === 'string' && data.toLowerCase().includes('not found')) {
        noData = true;
      }

      if (noData) {
        const fieldName = SEARCH_FIELD_MAP[action] || action.toUpperCase();
        const searchValue = paramValue || 'N/A';
        const keyDetails = buildKeyDetails(keyData, usage || { daily: 0 });
        return Response.json({
          status: false,
          message: `No ${fieldName} data found`,
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
          searched: {
            field: fieldName,
            value: searchValue
          },
          key_details: keyDetails,
          credit: CREDIT
        }, { status: 404 });
      }

      if (action === 'tgid' && typeof data === 'object') {
        data = formatTgidResponse(data);
      }

      // SUCCESS RESPONSE - NO CREDIT
      return Response.json({
      status: true,
      result: data,
      credit: CREDIT
      }, { status: resp.status });
    } catch (e) {
      return Response.json({
        status: false,
        message: `Error: ${e.message}`,
        credit: CREDIT
      }, { status: 500 });
    }
  }
};
