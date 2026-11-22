// ============================================================
// @Aprichit_190 - TG: @Aprichit_190
// emai :
// FULLY CLEANED BOT WORKER v6.1 — TEXT-ONLY COMMANDS (KV-ONLY)
// ============================================================

// ---------- CREDIT (internal only — never leaked in API response) ----------
const CREDIT = {
  name: "BLACK KNOWLEDGE",
  developer: "@Aprichit_190",
  contact: "https://t.me/ALONE_PATEL",
  footer: "Powered by BLACK KNOWLEDGE"
};

// ---------- BASE API ENDPOINTS ----------
const DEFAULT_API_MAP = {
  num: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=num',
  aadhar: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=aadhar',
  family: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=family',
  vehicle: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=vehicle-number',
  v2num: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=v2num',
  leakk: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=leak-number',
  numleak: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=leak-number',
  vehiclepdf: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=vehicle-pdf',
  vehicle3: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=vehicle-v4',
  weather: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=weather',
  bomb: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=bomb',
  gst: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=gst-direct',
  tgid: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=tgid',
  ff: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=ff',
  imei: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=imei-info',
  ifsc: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=ifsc',
  ifsc2: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=ifsc',
  pincode: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=pincode',
  ip: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=ip',
  tguser: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=tguser',
  paknum: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=paknum',
  pakcnic: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=pakcnic',
  pan: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=pan-info',
  challan: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=challan',
  vehchallan: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=challan',
  instagram: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=instagram-profile-full',
  pakpolice: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=pakpolice',
  upiinfo: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=upiinfo',
  gmailinfo: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=leak-email',
  paytm: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=paytm',
  paytminfo: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=paytm',
  adhaar: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=aadhar',
  aadhartorc: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=aadhar-ration',
  voterinfo: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=voter-info',
  song: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=song',
  girlfriend: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=girlfriend',
  github: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=github',
  number_adv: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=num',
  vehicle_adv: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=vehicle-number',
  numverify: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=num',
  pan_gst: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=gst-direct',
  gst_basic: 'https://api-src.alonepatel.shop/api?key=@ALONE_PATEL&action=gst-direct'
};

const PARAM_MAP = {
  gst: 'gstin', tgid: 'id', ff: 'uid', imei: 'imei', ifsc: 'ifsc',
  pincode: 'code', ip: 'ip', tguser: 'username', paknum: 'pak', pakcnic: 'q',
  pan: 'pan', challan: 'rc', instagram: 'term', pakpolice: 'num', upiinfo: 'q',
  gmailinfo: 'term', num: 'number', aadhar: 'aadhar', family: 'aadhar',
  vehicle: 'number', v2num: 'rc',
  leakk: 'term', song: 'name', paytm: 'info', adhaar: 'aadhar',
  girlfriend: 'msg', github: 'username', number_adv: 'mobile',
  vehicle_adv: 'rc', numverify: 'phone',
  pan_gst: 'pan', gst_basic: 'gstin',
  numleak: 'term', vehiclepdf: 'rc', vehicle3: 'rc', weather: 'city', bomb: 'number',
  ifsc2: 'ifsc', vehchallan: 'rc', paytminfo: 'info', aadhartorc: 'aadhar',
  voterinfo: 'epic'
};

const API_LIST = Object.keys(DEFAULT_API_MAP);
const MAX_MESSAGE_LENGTH = 4000;
const OWNER_ID = 8711985917;
const COST_PER_CALL = 1;
const TEST_KEY_EXPIRY_HOURS = 5;
const DEFAULT_EXPIRY_DAYS = 365;
const DEFAULT_DAILY_LIMIT = 100;
const DEFAULT_HOURLY_LIMIT = 20;
const DEFAULT_MINUTE_LIMIT = 5;

// ============================================================
// KV HELPERS
// ============================================================
async function getApiBase(action, env) {
  if (!env.API_DATA) return DEFAULT_API_MAP[action] || null;
  const customUrl = await env.API_DATA.get(`apiconfig:${action}`);
  if (customUrl) return customUrl;
  return DEFAULT_API_MAP[action] || null;
}

async function getKeyData(apiKey, env) {
  if (!env.API_DATA) return null;
  const val = await env.API_DATA.get(apiKey, 'json');
  if (val) return val;
  const staticKeys = env.STATIC_KEYS ? env.STATIC_KEYS.split(',') : [];
  if (staticKeys.includes(apiKey)) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + (parseInt(env.DEFAULT_EXPIRY_DAYS) || DEFAULT_EXPIRY_DAYS));
    return {
      user_id: 0,
      daily_limit: parseInt(env.DEFAULT_DAILY_LIMIT) || DEFAULT_DAILY_LIMIT,
      hourly_limit: parseInt(env.DEFAULT_HOURLY_LIMIT) || DEFAULT_HOURLY_LIMIT,
      minute_limit: parseInt(env.DEFAULT_MINUTE_LIMIT) || DEFAULT_MINUTE_LIMIT,
      expiry_date: expiry.toISOString().split('T')[0],
      expiry_time: expiry.toISOString(),
      allowed_apis: '*', status: 'active'
    };
  }
  return null;
}

async function getAllByRole(role, env) {
  if (!env.API_DATA) return [];
  const result = [];
  const list = await env.API_DATA.list({ prefix: 'role:' });
  for (const item of list.keys) {
    const r = await env.API_DATA.get(item.name);
    if (r === role) {
      const cid = item.name.replace('role:', '');
      const exp = await env.API_DATA.get(`role_expiry:${cid}`);
      if (exp && new Date(exp) < new Date()) continue;
      result.push(cid);
    }
  }
  return result;
}

async function updateUsage(apiKey, env) {
  if (!env.API_DATA) return null;
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const hour = now.toISOString().slice(0, 13) + ':00:00';
  const minute = now.toISOString().slice(0, 16) + ':00';
  const key = `usage:${apiKey}`;
  let usage = await env.API_DATA.get(key, 'json') || { date: today, hour, minute, daily: 0, hourly: 0, minuteCount: 0 };
  if (usage.date !== today) { usage.daily = 0; usage.date = today; }
  if (usage.hour !== hour) { usage.hourly = 0; usage.hour = hour; }
  if (usage.minute !== minute) { usage.minuteCount = 0; usage.minute = minute; }
  usage.daily += 1; usage.hourly += 1; usage.minuteCount += 1;
  await env.API_DATA.put(key, JSON.stringify(usage), { expirationTtl: 86400 * 2 });
  return usage;
}

async function getUser(chatId, env) {
  const user = await env.API_DATA.get(`user:${chatId}`, 'json');
  if (!user) {
    return {
      chat_id: chatId, username: '', fullname: '', balance: 10,
      daily_limit: DEFAULT_DAILY_LIMIT, hourly_limit: DEFAULT_HOURLY_LIMIT,
      minute_limit: DEFAULT_MINUTE_LIMIT,
      used_today: 0, used_hour: 0, used_minute: 0
    };
  }
  if (user.balance === undefined) user.balance = 10;
  if (!user.daily_limit) user.daily_limit = DEFAULT_DAILY_LIMIT;
  if (!user.hourly_limit) user.hourly_limit = DEFAULT_HOURLY_LIMIT;
  if (!user.minute_limit) user.minute_limit = DEFAULT_MINUTE_LIMIT;
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

async function getRole(chatId, env) {
  if (!env.API_DATA) return null;
  const exp = await env.API_DATA.get(`role_expiry:${chatId}`);
  if (exp && new Date(exp) < new Date()) {
    await env.API_DATA.delete(`role:${chatId}`);
    await env.API_DATA.delete(`role_expiry:${chatId}`);
    return null;
  }
  return await env.API_DATA.get(`role:${chatId}`) || null;
}

async function setRole(chatId, role, env) {
  await env.API_DATA.put(`role:${chatId}`, role);
}

async function removeRole(chatId, env) {
  await env.API_DATA.delete(`role:${chatId}`);
  await env.API_DATA.delete(`role_expiry:${chatId}`);
}

async function isOwner(chatId) {
  return parseInt(chatId) === OWNER_ID;
}

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
  const arr = new Uint8Array(8);
  crypto.getRandomValues(arr);
  return 'ALONE_PATEL-' + Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
}

async function createAPIKeyForUser(chatId, daily, hourly, minute, expiryDays, expiryHours, expiryMinutes, allowed, env) {
  const key = generateAPIKey();
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + (expiryDays || 0));
  expiry.setHours(expiry.getHours() + (expiryHours || 0));
  expiry.setMinutes(expiry.getMinutes() + (expiryMinutes || 0));
  const keyData = {
    user_id: chatId, daily_limit: daily, hourly_limit: hourly, minute_limit: minute,
    expiry_date: expiry.toISOString().split('T')[0],
    expiry_time: expiry.toISOString(),
    allowed_apis: allowed || '*', status: 'active'
  };
  await env.API_DATA.put(key, JSON.stringify(keyData));
  const userKeys = await env.API_DATA.get(`userkeys:${chatId}`, 'json') || [];
  if (!userKeys.includes(key)) userKeys.push(key);
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
  for (const k of keys) await blockAPIKey(k.key, env);
  return keys.length;
}

async function deleteAPIKey(key, env) {
  const data = await env.API_DATA.get(key, 'json');
  if (!data) return false;
  const userKeys = await env.API_DATA.get(`userkeys:${data.user_id}`, 'json') || [];
  await env.API_DATA.put(`userkeys:${data.user_id}`, JSON.stringify(userKeys.filter(k => k !== key)));
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
  data.daily_limit = daily; data.hourly_limit = hourly; data.minute_limit = minute;
  await env.API_DATA.put(key, JSON.stringify(data));
  return true;
}

async function getState(chatId, env) {
  return await env.API_DATA.get(`state:${chatId}`, 'json') || null;
}
async function setState(chatId, state, env) {
  await env.API_DATA.put(`state:${chatId}`, JSON.stringify(state), { expirationTtl: 3600 });
}
async function clearState(chatId, env) {
  await env.API_DATA.delete(`state:${chatId}`);
}

async function logAPICall(apiKey, action, paramValue, env) {
  if (!env.API_DATA) return;
  const logKey = `log:${apiKey}`;
  let logs = await env.API_DATA.get(logKey, 'json') || [];
  logs.push({ time: new Date().toISOString(), action, param: paramValue });
  if (logs.length > 50) logs = logs.slice(-50);
  await env.API_DATA.put(logKey, JSON.stringify(logs), { expirationTtl: 86400 * 7 });
}

async function getLogs(apiKey, env) {
  return await env.API_DATA.get(`log:${apiKey}`, 'json') || [];
}

async function getUserLogs(chatId, env) {
  const keys = await getKeysForUser(chatId, env);
  let all = [];
  for (const k of keys) {
    const logs = await getLogs(k.key, env);
    for (const l of logs) all.push({ key: k.key, ...l });
  }
  all.sort((a, b) => new Date(b.time) - new Date(a.time));
  return all.slice(0, 50);
}

// ---------- TELEGRAM HELPERS ----------
function tgToken(env) {
  return env.TELEGRAM_BOT_TOKEN || '8910963288:AAG-1ZRAyG3fPD4R5mdV8lC_quD6xWn6naM';
}

async function sendTelegram(chatId, message, env, parse_mode = 'HTML', reply_markup = null) {
  const url = `https://api.telegram.org/bot${tgToken(env)}/sendMessage`;
  const payload = { chat_id: chatId, text: message, parse_mode };
  if (reply_markup) payload.reply_markup = reply_markup;
  try {
    await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) { console.error('sendTelegram error:', e); }
}

async function sendPhoto(chatId, photo, caption, env) {
  const url = `https://api.telegram.org/bot${tgToken(env)}/sendPhoto`;
  try {
    await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, photo, caption })
    });
  } catch (e) { console.error('sendPhoto error:', e); }
}

async function answerCallback(callbackId, text, env) {
  const url = `https://api.telegram.org/bot${tgToken(env)}/answerCallbackQuery`;
  try {
    await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ callback_query_id: callbackId, text })
    });
  } catch (e) { console.error('answerCallback error:', e); }
}

async function editTelegram(chatId, messageId, text, env, parse_mode = 'HTML', reply_markup = null) {
  const url = `https://api.telegram.org/bot${tgToken(env)}/editMessageText`;
  const payload = { chat_id: chatId, message_id: messageId, text, parse_mode };
  if (reply_markup) payload.reply_markup = reply_markup;
  try {
    await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) { console.error('editTelegram error:', e); }
}

// ---------- LONG MESSAGE / FILE / PARTS ----------
async function sendLongMessage(chatId, message, env, parse_mode = 'HTML', reply_markup = null) {
  if (message.length <= MAX_MESSAGE_LENGTH) {
    await sendTelegram(chatId, message, env, parse_mode, reply_markup);
    return;
  }
  const keyboard = {
    inline_keyboard: [
      [{ text: '📄 Send as File', callback_data: `file_pref::file` }],
      [{ text: '📝 Send as Parts', callback_data: `file_pref::parts` }]
    ]
  };
  await sendTelegram(chatId,
    "⚠️ <b>Message is too long!</b>\n\nChoose how to receive:\n• <b>File</b> - Text file with all data\n• <b>Parts</b> - Split into multiple messages",
    env, 'HTML', JSON.stringify(keyboard)
  );
  await setState(chatId, { step: 'long_message_pending', message, parse_mode, reply_markup }, env);
}

async function sendAsFile(chatId, content, env, filename = null) {
  const url = `https://api.telegram.org/bot${tgToken(env)}/sendDocument`;
  const chatIdStr = String(chatId);
  const finalFilename = filename || `${chatIdStr}_data.txt`;
  const formData = new FormData();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  formData.append('document', blob, finalFilename);
  formData.append('chat_id', chatId);
  formData.append('caption', `📄 <b>Data exported!</b>\n📁 ${finalFilename}\n📊 ${Math.round(content.length / 1024)} KB`);
  formData.append('parse_mode', 'HTML');
  try {
    await fetch(url, { method: 'POST', body: formData });
  } catch (e) { console.error('sendAsFile error:', e); }
}

async function sendAsParts(chatId, message, env, parse_mode = 'HTML', reply_markup = null) {
  const parts = [];
  let currentPart = '';
  for (const line of message.split('\n')) {
    if (currentPart.length + line.length + 1 > MAX_MESSAGE_LENGTH) {
      parts.push(currentPart); currentPart = '';
    }
    currentPart += line + '\n';
  }
  if (currentPart) parts.push(currentPart);
  const totalParts = parts.length;
  for (let i = 0; i < totalParts; i++) {
    const partHeader = `📄 Part ${i + 1}/${totalParts}\n━━━━━━━━━━━━━━━━━━━\n\n`;
    await sendTelegram(chatId, partHeader + parts[i], env, parse_mode, (i === totalParts - 1) ? reply_markup : null);
  }
}

// ---------- API LINKS TEXT ----------
async function getApiLinksText(key, allowedApis, env) {
  const baseUrl = env.API_PUBLIC_URL || "https://api-src.blackapipr.workers.dev/api";
  let links = "\n\n🔗 <b>YOUR API LINKS:</b>\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n";
  const isAll = allowedApis === '*' || !allowedApis;
  let apis = isAll ? ['num', 'aadhar', 'pan', 'pan_gst', 'gst_basic'] : allowedApis.split(',');

  for (const api of apis) {
    if (api === 'num') {
      links += `📱 <b>NUMBER API:</b>\n<code>${baseUrl}?key=${key}&number=9876543210</code>\n\n`;
    } else if (['aadhar', 'family', 'adhaar'].includes(api)) {
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
        girlfriend: 'msg=hello', github: 'username=octocat',
        number_adv: 'mobile=6204458125', vehicle_adv: 'rc=RJ18CF3690',
        numverify: 'phone=923350071964'
      };
      const param = paramMap[api] || 'q=example';
      links += `🔹 <b>${api.toUpperCase()} API:</b>\n<code>${baseUrl}?key=${key}&action=${api}&${param}</code>\n\n`;
    }
  }
  if (isAll) {
    links += `\n✅ <b>This key has access to ALL APIs.</b>\n`;
    links += `\n📌 <b>New APIs:</b> PAN to GSTIN, GSTIN Basic\n`;
  }
  return links;
}

// ---------- PROFILE ----------
async function formatProfileMessage(chatId, env) {
  const user = await getUser(chatId, env);
  const keys = await getKeysForUser(chatId, env);
  const allKeys = await env.API_DATA.list({ prefix: 'ALONE_PATEL-' });
  const blockedKeys = [];
  for (const item of allKeys.keys) {
    const data = await env.API_DATA.get(item.name, 'json');
    if (data && data.status === 'blocked' && String(data.user_id) === String(chatId)) {
      blockedKeys.push({ key: item.name, ...data });
    }
  }
  const sep = "╠══════════════════════╣";
  let msg = `👤 <b>MY PROFILE</b>\n\n`;
  msg += `💰 <b>Balance:</b> ${user.balance || 0} units\n`;
  msg += `💸 <b>Cost per API call:</b> ${COST_PER_CALL} unit(s)\n\n${sep}\n`;
  msg += `📊 <b>Your Global Rate Limits:</b>\n`;
  msg += `📅 Daily: <b>${user.daily_limit}</b> (Used: ${user.used_today || 0})\n`;
  msg += `⏱ Hourly: <b>${user.hourly_limit}</b> (Used: ${user.used_hour || 0})\n`;
  msg += `⏳ Minute: <b>${user.minute_limit}</b> (Used: ${user.used_minute || 0})\n${sep}\n`;
  if (keys.length > 0) {
    msg += `🔑 <b>Your API Keys (${keys.length}):</b>\n`;
    for (const k of keys) {
      const usage = await env.API_DATA.get(`usage:${k.key}`, 'json') || { daily: 0 };
      let expiryStr = k.expiry_date || 'Never';
      if (k.expiry_time) expiryStr = new Date(k.expiry_time).toLocaleString();
      msg += `• <code>${k.key}</code>\n  └ Daily: ${k.daily_limit} (Used: ${usage.daily || 0})\n  └ Expiry: ${expiryStr}\n  └ Status: ${k.status}\n`;
      msg += await getApiLinksText(k.key, k.allowed_apis || '*', env);
    }
  } else {
    msg += `❌ No API keys yet.\n`;
  }
  msg += `${sep}\n`;
  if (blockedKeys.length > 0) {
    msg += `🚫 <b>Blocked Keys (${blockedKeys.length}):</b>\n`;
    for (const bk of blockedKeys) msg += `• <code>${bk.key}</code>\n`;
  } else {
    msg += `✅ No blocked keys found.\n`;
  }
  msg += `${sep}`;
  return msg;
}

// ---------- MAIN MENU ----------
function getMainMenuText(isAdmin = false, isReseller = false, isOwner = false) {
  let msg = "╔═══════════════════════╗\n";
  msg += "║ 🔥 BLACK KNOWLEDGE║\n";
  msg += "╠═══════════════════════╣\n";
  msg += "║ 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐊𝐄𝐘 𝐏𝐀𝐍𝐄𝐋 \n║ 𝐃𝐌: @Aprichit_190 \n";
  msg += "╚═══════════════════════╝\n\n";
  msg += "━━━━━━━━━━✦✗✦━━━━━━━━━━━\n📌 <b>MAIN COMMANDS:</b>\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n";
  msg += "🔑 /key — My API Keys\n💰 /balance — Check Balance\n👤 /profile — Full Profile\n📜 /history — Recent API Calls\n❓ /help — All Commands\n";

  if (isReseller || isAdmin || isOwner) {
    msg += "\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n💼 <b>RESELLER COMMANDS:</b>\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n";
    msg += "⚡ /genkey &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;days&gt; [apis]\n";
    msg += "➕ /addkey &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;days&gt; [apis]\n";
    msg += "🚫 /blockkey &lt;key&gt;\n✅ /unblockkey &lt;key&gt;\n";
    msg += "\n📝 <i>Example:</i> <code>/genkey 100 20 5 365 gst,pan</code>\n";
  }

  if (isAdmin || isOwner) {
    msg += "\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n🛡️ <b>ADMIN COMMANDS:</b>\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n";
    msg += "👥 /adduser &lt;chat_id&gt; &lt;username&gt; &lt;fullname&gt;\n";
    msg += "🗑️ /removeuser &lt;chat_id&gt;\n📋 /listusers — All Users\n";
    msg += "🔍 /userinfo &lt;chat_id&gt;\n⚙️ /setkeylimit &lt;key&gt; &lt;d&gt; &lt;h&gt; &lt;m&gt;\n";
    msg += "🔑 /getkey &lt;key&gt;\n📜 /listkeys — All Keys\n";
    msg += "💰 /setbalance &lt;chat_id&gt; &lt;amount&gt;\n➕ /addbalance &lt;chat_id&gt; &lt;amount&gt;\n";
    msg += "➖ /deduct &lt;chat_id&gt; &lt;amount&gt;\n🔄 /resetbalance &lt;chat_id&gt;\n";
    msg += "🗑️ /deletekey &lt;key&gt;\n🔗 /getkeys &lt;chat_id or @username&gt;\n";
    msg += "🌐 /updateapi &lt;action&gt; &lt;url&gt;\n↩️ /resetapi &lt;action&gt;\n";
    msg += "📋 /adminlist — Admins &amp; Resellers\n";
  }

  if (isOwner) {
    msg += "\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n👑 <b>OWNER COMMANDS:</b>\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n";
    msg += "➕ /addadmin &lt;chat_id&gt; [1d/1m/1y]\n➖ /removeadmin &lt;chat_id&gt;\n";
    msg += "➕ /addreseller &lt;chat_id&gt; [1d/1m/1y]\n➖ /removereseller &lt;chat_id&gt;\n";
    msg += "📊 /stats — Bot Stats\n📢 /broadcast &lt;message&gt;\n📈 /allstats — All User Stats\n";
    msg += "🚫 /removeuserkeys &lt;chat_id&gt;\n";
  }

  msg += "\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n💬 <b>Contact:</b> @Aprichit_190\n━━━━━━━━━━✦✗✦━━━━━━━━━━━";
  return msg;
}

// ============================================================
// BOT HANDLER
// ============================================================
async function handleBot(request, env) {
  try {
    if (!env.API_DATA) {
      return new Response('KV not configured', { status: 500 });
    }
    const body = await request.json();
    if (!body.message && !body.callback_query) return new Response('OK', { status: 200 });

    // ============================================================
    // MESSAGES
    // ============================================================
    if (body.message) {
      const msg = body.message;
      const chatId = msg.chat.id;
      const fromId = msg.from.id;
      const username = msg.from.username || '';
      const fullname = ((msg.from.first_name || '') + ' ' + (msg.from.last_name || '')).trim();
      const text = msg.text ? msg.text.trim() : '';

      const isOwn = await isOwner(fromId);
      const isAdm = await isAdmin(fromId, env);
      const isRes = await isReseller(fromId, env);
      const authorized = isOwn || isAdm || isRes;

      const user = await getUser(fromId, env);
      if (!user.username && username) {
        user.username = username;
        user.fullname = fullname;
        await env.API_DATA.put(`user:${fromId}`, JSON.stringify(user));
      }

      // ---------- UNAUTHORIZED ----------
      if (!authorized) {
        if (text === '/testkey') {
          const used = await env.API_DATA.get(`testkey_used:${fromId}`);
          if (used) {
            await sendTelegram(chatId, "❌ You have already used your one-time test key.\nContact @Aprichit_190 for permanent access.", env);
            return new Response('OK', { status: 200 });
          }
          const expiry = new Date();
          expiry.setHours(expiry.getHours() + TEST_KEY_EXPIRY_HOURS);
          const keyData = {
            user_id: fromId, daily_limit: 10, hourly_limit: 5, minute_limit: 2,
            expiry_date: expiry.toISOString().split('T')[0],
            expiry_time: expiry.toISOString(),
            allowed_apis: '*', status: 'active'
          };
          const key = generateAPIKey();
          await env.API_DATA.put(key, JSON.stringify(keyData));
          const userKeys = await env.API_DATA.get(`userkeys:${fromId}`, 'json') || [];
          userKeys.push(key);
          await env.API_DATA.put(`userkeys:${fromId}`, JSON.stringify(userKeys));
          await env.API_DATA.put(`testkey_used:${fromId}`, 'true');
          let t = `🎁 <b>One-Time Test Key Generated!</b>\n\n🔑 <b>Key:</b> <code>${key}</code>\n📅 Daily: 10 | ⏱ Hourly: 5 | ⏳ Minute: 2\n📅 Expiry: ${expiry.toLocaleString()} (5 hours)\n🔧 APIs: All APIs\n\n✅ Use this key to test. After expiry, contact @Aprichit_190.`;
          t += await getApiLinksText(key, '*', env);
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }
        const notice = `⚠️ <b>Access Denied</b>\n\nYou are not authorized to use this bot.\nPlease contact @Aprichit_190 to get access.\n\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n💡 Send <code>/testkey</code> to get a one-time free test key.\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\n© @Aprichit_190 - All rights reserved.`;
        await sendTelegram(chatId, notice, env);
        return new Response('OK', { status: 200 });
      }

      // ---------- START ----------
      if (text === '/start') {
        const welcome = "╔═══════════════════════╗\n║ 🔥 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 — ♧BLACL KNOWLEDGE ║\n╠═══════════════════════╣\n║ 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 𝐊𝐄𝐘 𝐏𝐀𝐍𝐄𝐋 𝐁𝐎𝐓 \n║ 𝐃𝐌 𝐓𝐎 𝐁𝐔𝐘 :: @Aprichit_190 \n╚═══════════════════════╝\n\n━━━━━━━━━━✦✗✦━━━━━━━━━━━\nCONTACT (DM): @Aprichit_190\n━━━━━━━━━━✦✗✦━━━━━━━━━━━";
        await sendPhoto(chatId, 'https://iili.io/BMKKREv.jpg', welcome, env);
        await sendLongMessage(chatId, getMainMenuText(isAdm, isRes, isOwn), env);
        return new Response('OK', { status: 200 });
      }

      // ---------- COMMANDS ----------
      if (text.startsWith('/')) {
        const parts = text.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        // ========== GENERAL ==========
        if (cmd === '/help') {
          await sendLongMessage(chatId, getMainMenuText(isAdm, isRes, isOwn), env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/key' || cmd === '/mykeys') {
          const keys = await getKeysForUser(fromId, env);
          if (keys.length === 0) {
            await sendTelegram(chatId, "❌ You have no API keys.\n💡 Use <code>/genkey</code> (resellers+) or contact @Aprichit_190.", env);
            return new Response('OK', { status: 200 });
          }
          let t = "<b>🔑 Your API Keys:</b>\n\n";
          for (const k of keys) {
            const usage = await env.API_DATA.get(`usage:${k.key}`, 'json') || { daily: 0 };
            let expiryStr = k.expiry_date || 'Never';
            if (k.expiry_time) expiryStr = new Date(k.expiry_time).toLocaleString();
            const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
            t += `• <b>Key:</b> <code>${k.key}</code>\n  └ Daily: ${k.daily_limit} (Used: ${usage.daily || 0})\n  └ Hourly: ${k.hourly_limit}\n  └ Minute: ${k.minute_limit}\n  └ Expiry: ${expiryStr}\n  └ Status: ${k.status}\n  └ APIs: ${allowed}\n`;
            t += await getApiLinksText(k.key, k.allowed_apis || '*', env);
          }
          await sendLongMessage(chatId, t, env);
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
            let t = "<b>📊 Your Recent API Calls</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
            for (const log of logs) {
              t += `🔑 <b>Key:</b> <code>${log.key}</code>\n📌 <b>Action:</b> ${log.action}\n📝 <b>Param:</b> ${log.param}\n🕐 <b>Time:</b> ${new Date(log.time).toLocaleString()}\n━━━━━━━━━━━━━━━━━━━\n`;
            }
            await sendLongMessage(chatId, t, env);
          } catch (err) {
            console.error(err);
            await sendTelegram(chatId, "❌ Error fetching history.", env);
          }
          return new Response('OK', { status: 200 });
        }

        // ========== RESELLER ==========
        if (cmd === '/genkey' && isRes) {
          if (args.length < 4) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/genkey &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis]</code>\n\n<b>Example:</b> <code>/genkey 100 20 5 365 gst,pan</code>", env);
            return new Response('OK', { status: 200 });
          }
          const daily = parseInt(args[0]), hourly = parseInt(args[1]), minute = parseInt(args[2]), days = parseInt(args[3]);
          if ([daily, hourly, minute, days].some(n => isNaN(n) || n < 0)) {
            await sendTelegram(chatId, "❌ Invalid numbers.", env);
            return new Response('OK', { status: 200 });
          }
          const allowed = args[4] || '*';
          const newKey = await createAPIKeyForUser(fromId, daily, hourly, minute, days, 0, 0, allowed, env);
          const expiryDate = new Date();
          expiryDate.setDate(expiryDate.getDate() + days);
          let t = `✅ <b>Key Generated!</b>\n\n👤 By: @${username || fullname}\n🔑 <b>Key:</b> <code>${newKey}</code>\n📅 Daily: ${daily}\n⏱ Hourly: ${hourly}\n⏳ Minute: ${minute}\n📅 Expiry: ${expiryDate.toLocaleString()}\n🔧 APIs: ${allowed === '*' ? 'All APIs' : allowed}`;
          t += await getApiLinksText(newKey, allowed, env);
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/addkey' && isRes) {
          if (args.length < 5) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/addkey &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt; &lt;expiry_days&gt; [apis]</code>\n\n<b>Example:</b> <code>/addkey ALONE_PATEL-NEW123 50 20 2 3 ifsc,num</code>", env);
            return new Response('OK', { status: 200 });
          }
          const customKey = args[0];
          const daily = parseInt(args[1]), hourly = parseInt(args[2]), minute = parseInt(args[3]), days = parseInt(args[4]);
          if ([daily, hourly, minute, days].some(n => isNaN(n) || n < 0)) {
            await sendTelegram(chatId, "❌ Invalid numbers.", env);
            return new Response('OK', { status: 200 });
          }
          const existing = await env.API_DATA.get(customKey, 'json');
          if (existing) {
            await sendTelegram(chatId, "❌ This key already exists.", env);
            return new Response('OK', { status: 200 });
          }
          const allowed = args[5] || '*';
          const expiry = new Date();
          expiry.setDate(expiry.getDate() + days);
          const keyData = {
            user_id: fromId, daily_limit: daily, hourly_limit: hourly, minute_limit: minute,
            expiry_date: expiry.toISOString().split('T')[0], expiry_time: expiry.toISOString(),
            allowed_apis: allowed, status: 'active'
          };
          await env.API_DATA.put(customKey, JSON.stringify(keyData));
          const userKeys = await env.API_DATA.get(`userkeys:${fromId}`, 'json') || [];
          if (!userKeys.includes(customKey)) userKeys.push(customKey);
          await env.API_DATA.put(`userkeys:${fromId}`, JSON.stringify(userKeys));
          let t = `✅ <b>Custom Key Added!</b>\n\n👤 By: @${username || fullname}\n🔑 <b>Key:</b> <code>${customKey}</code>\n📅 Daily: ${daily}\n⏱ Hourly: ${hourly}\n⏳ Minute: ${minute}\n📅 Expiry: ${expiry.toLocaleString()}\n🔧 APIs: ${allowed === '*' ? 'All APIs' : allowed}`;
          t += await getApiLinksText(customKey, allowed, env);
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/blockkey' && (isAdm || isRes)) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/blockkey &lt;key&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const keyData = await env.API_DATA.get(args[0], 'json');
          if (!keyData) {
            await sendTelegram(chatId, `❌ Key not found.`, env);
            return new Response('OK', { status: 200 });
          }
          if (!isAdm && String(keyData.user_id) !== String(fromId)) {
            await sendTelegram(chatId, "❌ You can only block your own keys!", env);
            return new Response('OK', { status: 200 });
          }
          await blockAPIKey(args[0], env);
          await sendTelegram(chatId, `✅ Key <code>${args[0]}</code> blocked.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/unblockkey' && (isAdm || isRes)) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/unblockkey &lt;key&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const keyData = await env.API_DATA.get(args[0], 'json');
          if (!keyData) {
            await sendTelegram(chatId, `❌ Key not found.`, env);
            return new Response('OK', { status: 200 });
          }
          if (!isAdm && String(keyData.user_id) !== String(fromId)) {
            await sendTelegram(chatId, "❌ You can only unblock your own keys!", env);
            return new Response('OK', { status: 200 });
          }
          await unblockAPIKey(args[0], env);
          await sendTelegram(chatId, `✅ Key <code>${args[0]}</code> unblocked.`, env);
          return new Response('OK', { status: 200 });
        }

        // ========== ADMIN ==========
        if (cmd === '/adduser' && isAdm) {
          if (args.length < 3) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/adduser &lt;chat_id&gt; &lt;username&gt; &lt;fullname&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const u = await getUser(args[0], env);
          u.username = args[1];
          u.fullname = args.slice(2).join(' ');
          await env.API_DATA.put(`user:${args[0]}`, JSON.stringify(u));
          await sendTelegram(chatId, `✅ User ${args[0]} added.\n👤 ${args[1]}\n📛 ${args.slice(2).join(' ')}`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/removeuser' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/removeuser &lt;chat_id&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const u = await getUser(args[0], env);
          await env.API_DATA.delete(`user:${args[0]}`);
          await sendTelegram(chatId, `✅ User ${args[0]} (${u.username || 'No username'}) removed.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/listusers' && isAdm) {
          const list = await env.API_DATA.list({ prefix: 'user:' });
          let t = "<b>📜 All Users:</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const item of list.keys) {
            const u = await env.API_DATA.get(item.name, 'json');
            if (u) {
              const a = await isAdmin(u.chat_id, env);
              const r = await isReseller(u.chat_id, env);
              let role = "👤 User";
              if (a && String(u.chat_id) === String(OWNER_ID)) role = "👑 Owner";
              else if (a) role = "🛡️ Admin";
              else if (r) role = "💼 Reseller";
              t += `🆔 <b>${u.chat_id}</b>\n👤 ${u.username || 'N/A'}\n📛 ${u.fullname || 'N/A'}\n💰 ${u.balance || 0}\n🔰 ${role}\n━━━━━━━━━━━━━━━━━━━\n`;
            }
          }
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/userinfo' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/userinfo &lt;chat_id&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const target = args[0];
          const u = await getUser(target, env);
          const keys = await getKeysForUser(target, env);
          const a = await isAdmin(target, env);
          const r = await isReseller(target, env);
          let role = "User";
          if (a && String(target) === String(OWNER_ID)) role = "Owner";
          else if (a) role = "Admin";
          else if (r) role = "Reseller";
          let t = `<b>📊 User Info: ${target}</b>\n\n👤 ${u.username || 'N/A'}\n📛 ${u.fullname || 'N/A'}\n💰 Balance: ${u.balance || 0}\n🔰 Role: ${role}\n🔑 Keys: ${keys.length}\n`;
          if (keys.length > 0) {
            t += `\n<b>Keys:</b>\n`;
            for (const k of keys) t += `• <code>${k.key}</code> - ${k.status}\n`;
          }
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/setkeylimit' && isAdm) {
          if (args.length < 4) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/setkeylimit &lt;key&gt; &lt;daily&gt; &lt;hourly&gt; &lt;minute&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const ok = await setKeyLimits(args[0], parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), env);
          if (ok) await sendTelegram(chatId, `✅ Limits updated: ${args[1]}/${args[2]}/${args[3]}`, env);
          else await sendTelegram(chatId, `❌ Key not found.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/getkey' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/getkey &lt;key&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const data = await env.API_DATA.get(args[0], 'json');
          if (!data) {
            await sendTelegram(chatId, `❌ Key not found.`, env);
            return new Response('OK', { status: 200 });
          }
          const usage = await env.API_DATA.get(`usage:${args[0]}`, 'json') || { daily: 0 };
          let expiryStr = data.expiry_date || 'Never';
          if (data.expiry_time) expiryStr = new Date(data.expiry_time).toLocaleString();
          const allowed = data.allowed_apis === '*' ? 'All APIs' : data.allowed_apis;
          let t = `<b>🔑 Key Info</b>\n\nUser: ${data.user_id}\nDaily: ${data.daily_limit} (Used: ${usage.daily || 0})\nHourly: ${data.hourly_limit}\nMinute: ${data.minute_limit}\nStatus: ${data.status}\nExpiry: ${expiryStr}\nAPIs: ${allowed}`;
          t += await getApiLinksText(args[0], data.allowed_apis || '*', env);
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/listkeys' && isAdm) {
          const list = await env.API_DATA.list({ prefix: 'ALONE_PATEL-' });
          let t = "<b>📜 All Keys:</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const item of list.keys) {
            const data = await env.API_DATA.get(item.name, 'json');
            if (data) {
              let expiryStr = data.expiry_date || 'Never';
              if (data.expiry_time) expiryStr = new Date(data.expiry_time).toLocaleString();
              const allowed = data.allowed_apis === '*' ? 'All APIs' : data.allowed_apis;
              t += `🔑 <code>${item.name}</code>\n👤 ${data.user_id}\n📌 ${data.status}\n📅 ${expiryStr}\n🔧 ${allowed}\n\n`;
            }
          }
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/setbalance' && isAdm) {
          if (args.length < 2) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/setbalance &lt;chat_id&gt; &lt;amount&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          await setUserBalance(args[0], parseInt(args[1]), env);
          await sendTelegram(chatId, `✅ Balance set to ${args[1]} for ${args[0]}.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/resetbalance' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/resetbalance &lt;chat_id&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          await setUserBalance(args[0], 10, env);
          await sendTelegram(chatId, `✅ Balance reset to 10 for ${args[0]}.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/addbalance' && isAdm) {
          if (args.length < 2) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/addbalance &lt;chat_id&gt; &lt;amount&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const nb = await updateUserBalance(args[0], parseInt(args[1]), env);
          await sendTelegram(chatId, `✅ Added ${args[1]}. New: ${nb}`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/deduct' && isAdm) {
          if (args.length < 2) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/deduct &lt;chat_id&gt; &lt;amount&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const nb = await updateUserBalance(args[0], -parseInt(args[1]), env);
          await sendTelegram(chatId, `✅ Deducted ${args[1]}. New: ${nb}`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/getkeys' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/getkeys &lt;chat_id or @username&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          let target = args[0];
          if (target.startsWith('@')) {
            const list = await env.API_DATA.list({ prefix: 'user:' });
            for (const item of list.keys) {
              const u = await env.API_DATA.get(item.name, 'json');
              if (u && u.username && u.username.toLowerCase() === target.substring(1).toLowerCase()) {
                target = u.chat_id; break;
              }
            }
          }
          const keys = await getKeysForUser(target, env);
          let t = `<b>🔑 Keys for ${target}</b>\n━━━━━━━━━━━━━━━━━━━\n\n`;
          if (keys.length === 0) t += "No keys found.";
          for (const k of keys) {
            let expiryStr = k.expiry_date || 'Never';
            if (k.expiry_time) expiryStr = new Date(k.expiry_time).toLocaleString();
            const allowed = k.allowed_apis === '*' ? 'All APIs' : k.allowed_apis;
            t += `• <b>Key:</b> <code>${k.key}</code>\n  └ Daily: ${k.daily_limit}\n  └ Hourly: ${k.hourly_limit}\n  └ Minute: ${k.minute_limit}\n  └ Expiry: ${expiryStr}\n  └ Status: ${k.status}\n  └ APIs: ${allowed}\n`;
            t += await getApiLinksText(k.key, k.allowed_apis || '*', env);
          }
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/deletekey' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/deletekey &lt;key&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const del = await deleteAPIKey(args[0], env);
          if (del) await sendTelegram(chatId, `✅ Key <code>${args[0]}</code> deleted.`, env);
          else await sendTelegram(chatId, `❌ Key not found.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/updateapi' && isAdm) {
          if (args.length < 2) {
            await sendTelegram(chatId, `❌ <b>Usage:</b> <code>/updateapi &lt;action&gt; &lt;new_url&gt;</code>\n\nAvailable: ${API_LIST.join(', ')}`, env);
            return new Response('OK', { status: 200 });
          }
          const action = args[0];
          const newUrl = args.slice(1).join(' ');
          if (!DEFAULT_API_MAP[action]) {
            await sendTelegram(chatId, `❌ Invalid action.\nAvailable: ${API_LIST.join(', ')}`, env);
            return new Response('OK', { status: 200 });
          }
          await env.API_DATA.put(`apiconfig:${action}`, newUrl);
          await sendTelegram(chatId, `✅ <b>${action}</b> updated:\n<code>${newUrl}</code>`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/resetapi' && isAdm) {
          if (args.length < 1) {
            await sendTelegram(chatId, `❌ <b>Usage:</b> <code>/resetapi &lt;action&gt;</code>\n\nAvailable: ${API_LIST.join(', ')}`, env);
            return new Response('OK', { status: 200 });
          }
          const action = args[0];
          if (!DEFAULT_API_MAP[action]) {
            await sendTelegram(chatId, `❌ Invalid action.`, env);
            return new Response('OK', { status: 200 });
          }
          await env.API_DATA.delete(`apiconfig:${action}`);
          await sendTelegram(chatId, `✅ <b>${action}</b> reset to default.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/adminlist' && isAdm) {
          const adminList = await getAllByRole('admin', env);
          const resellerList = await getAllByRole('reseller', env);
          let t = "<b>📋 Admin & Reseller List</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          if (adminList.length === 0 && resellerList.length === 0) {
            t += "No admins or resellers found.";
          } else {
            if (adminList.length > 0) {
              t += "<b>👑 Admins:</b>\n";
              for (const cid of adminList) {
                const u = await getUser(cid, env);
                const keys = await getKeysForUser(cid, env);
                const exp = await env.API_DATA.get(`role_expiry:${cid}`);
                t += `🆔 <b>${cid}</b>\n👤 ${u.username || 'N/A'}\n📛 ${u.fullname || 'N/A'}\n🔑 Keys: ${keys.length}\n⏰ Expiry: ${exp ? new Date(exp).toLocaleString() : 'Never'}\n━━━━━━━━━━━━━━━━━━━\n`;
              }
            }
            if (resellerList.length > 0) {
              t += "\n<b>🛒 Resellers:</b>\n";
              for (const cid of resellerList) {
                const u = await getUser(cid, env);
                const keys = await getKeysForUser(cid, env);
                const exp = await env.API_DATA.get(`role_expiry:${cid}`);
                t += `🆔 <b>${cid}</b>\n👤 ${u.username || 'N/A'}\n📛 ${u.fullname || 'N/A'}\n🔑 Keys: ${keys.length}\n⏰ Expiry: ${exp ? new Date(exp).toLocaleString() : 'Never'}\n━━━━━━━━━━━━━━━━━━━\n`;
              }
            }
          }
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        // ========== OWNER ==========
        if (cmd === '/addadmin' && isOwn) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/addadmin &lt;chat_id&gt; [1d/1m/1y]</code>", env);
            return new Response('OK', { status: 200 });
          }
          const target = args[0];
          let days = 0;
          if (args[1]) {
            const es = args[1]; const n = parseInt(es);
            if (es.endsWith('d')) days = n;
            else if (es.endsWith('m')) days = n * 30;
            else if (es.endsWith('y')) days = n * 365;
            else days = n;
          }
          await setRole(target, 'admin', env);
          if (days > 0) {
            const exp = new Date(); exp.setDate(exp.getDate() + days);
            await env.API_DATA.put(`role_expiry:${target}`, exp.toISOString());
            await sendTelegram(chatId, `✅ Admin added: ${target}\n⏰ Expiry: ${exp.toLocaleString()} (${days}d)`, env);
          } else {
            await env.API_DATA.delete(`role_expiry:${target}`);
            await sendTelegram(chatId, `✅ Admin added: ${target}\n⏰ Expiry: Never`, env);
          }
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/removeadmin' && isOwn) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/removeadmin &lt;chat_id&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const target = args[0];
          const blocked = await blockAllKeysForUser(target, env);
          await removeRole(target, env);
          await sendTelegram(chatId, `✅ Admin removed: ${target}\n🚫 Keys blocked: ${blocked}`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/addreseller' && isOwn) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/addreseller &lt;chat_id&gt; [1d/1m/1y]</code>", env);
            return new Response('OK', { status: 200 });
          }
          const target = args[0];
          let days = 0;
          if (args[1]) {
            const es = args[1]; const n = parseInt(es);
            if (es.endsWith('d')) days = n;
            else if (es.endsWith('m')) days = n * 30;
            else if (es.endsWith('y')) days = n * 365;
            else days = n;
          }
          await setRole(target, 'reseller', env);
          if (days > 0) {
            const exp = new Date(); exp.setDate(exp.getDate() + days);
            await env.API_DATA.put(`role_expiry:${target}`, exp.toISOString());
            await sendTelegram(chatId, `✅ Reseller added: ${target}\n⏰ Expiry: ${exp.toLocaleString()} (${days}d)`, env);
          } else {
            await env.API_DATA.delete(`role_expiry:${target}`);
            await sendTelegram(chatId, `✅ Reseller added: ${target}\n⏰ Expiry: Never`, env);
          }
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/removereseller' && isOwn) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/removereseller &lt;chat_id&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const target = args[0];
          const blocked = await blockAllKeysForUser(target, env);
          await removeRole(target, env);
          await sendTelegram(chatId, `✅ Reseller removed: ${target}\n🚫 Keys blocked: ${blocked}`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/stats' && isOwn) {
          const keysCount = (await env.API_DATA.list({ prefix: 'ALONE_PATEL-' })).keys.length;
          const usersCount = (await env.API_DATA.list({ prefix: 'user:' })).keys.length;
          const admins = (await getAllByRole('admin', env)).length;
          const resellers = (await getAllByRole('reseller', env)).length;
          await sendTelegram(chatId, `📊 <b>Bot Statistics</b>\n\n🔑 Keys: ${keysCount}\n👥 Users: ${usersCount}\n👑 Admins: ${admins}\n🛒 Resellers: ${resellers}`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/broadcast' && isOwn) {
          if (args.length === 0) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/broadcast &lt;message&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const bMsg = args.join(' ');
          const users = await env.API_DATA.list({ prefix: 'user:' });
          let count = 0;
          for (const u of users.keys) {
            const cid = u.name.replace('user:', '');
            if (cid) { await sendTelegram(cid, `📢 <b>Broadcast</b>\n\n${bMsg}`, env); count++; }
          }
          await sendTelegram(chatId, `✅ Broadcast sent to ${count} users.`, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/allstats' && isOwn) {
          const users = await env.API_DATA.list({ prefix: 'user:' });
          let t = "<b>📊 All Users Stats</b>\n━━━━━━━━━━━━━━━━━━━\n\n";
          for (const item of users.keys) {
            const u = await env.API_DATA.get(item.name, 'json');
            if (u) {
              const a = await isAdmin(u.chat_id, env);
              const r = await isReseller(u.chat_id, env);
              let role = "User";
              if (a && String(u.chat_id) === String(OWNER_ID)) role = "Owner";
              else if (a) role = "Admin";
              else if (r) role = "Reseller";
              t += `🆔 ${u.chat_id}\n👤 ${u.username || 'N/A'}\n💰 ${u.balance || 0}\n🔰 ${role}\n\n`;
            }
          }
          await sendLongMessage(chatId, t, env);
          return new Response('OK', { status: 200 });
        }

        if (cmd === '/removeuserkeys' && isOwn) {
          if (args.length < 1) {
            await sendTelegram(chatId, "❌ <b>Usage:</b> <code>/removeuserkeys &lt;chat_id&gt;</code>", env);
            return new Response('OK', { status: 200 });
          }
          const blocked = await blockAllKeysForUser(args[0], env);
          await sendTelegram(chatId, `✅ All keys of ${args[0]} blocked (${blocked} keys).`, env);
          return new Response('OK', { status: 200 });
        }
      }
    }

    // ============================================================
    // CALLBACK QUERIES
    // ============================================================
    if (body.callback_query) {
      const cb = body.callback_query;
      const chatId = cb.message.chat.id;
      const data = cb.data || '';
      const callbackId = cb.id;

      if (data.startsWith('file_pref::')) {
        const pref = data.split('::')[1];
        const state = await getState(chatId, env);
        if (!state || state.step !== 'long_message_pending') {
          await answerCallback(callbackId, 'Session expired.', env);
          return new Response('OK', { status: 200 });
        }
        if (pref === 'file') {
          await sendAsFile(chatId, state.message, env, `${chatId}_data.txt`);
          await answerCallback(callbackId, 'File sent!', env);
        } else {
          await sendAsParts(chatId, state.message, env, state.parse_mode, state.reply_markup);
          await answerCallback(callbackId, 'Parts sent!', env);
        }
        await clearState(chatId, env);
        return new Response('OK', { status: 200 });
      }

      await answerCallback(callbackId, 'No action.', env);
      return new Response('OK', { status: 200 });
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Bot Error:', err);
    return new Response('Error', { status: 500 });
  }
}

// ============================================================
// API HANDLER
// ============================================================
async function handleApi(request, env) {
  try {
    const url = new URL(request.url);
    const key = url.searchParams.get('key');
    const action = url.searchParams.get('action') || 'num';

    if (!key) return Response.json({ error: 'API key required' }, { status: 400 });

    const keyData = await getKeyData(key, env);
    if (!keyData) return Response.json({ error: 'Invalid key' }, { status: 401 });
    if (keyData.status === 'blocked') return Response.json({ error: 'Key blocked' }, { status: 403 });

    if (keyData.expiry_time) {
      const exp = new Date(keyData.expiry_time);
      if (exp < new Date()) return Response.json({ error: 'Key expired' }, { status: 403 });
    }

    const usage = await env.API_DATA.get(`usage:${key}`, 'json') || { daily: 0, hourly: 0, minuteCount: 0 };
    if (usage.daily >= keyData.daily_limit) return Response.json({ error: 'Daily limit reached' }, { status: 429 });
    if (usage.hourly >= keyData.hourly_limit) return Response.json({ error: 'Hourly limit reached' }, { status: 429 });
    if (usage.minuteCount >= keyData.minute_limit) return Response.json({ error: 'Minute limit reached' }, { status: 429 });

    if (keyData.allowed_apis !== '*' && !keyData.allowed_apis.split(',').includes(action)) {
      return Response.json({ error: 'API not allowed for this key' }, { status: 403 });
    }

    const baseUrl = await getApiBase(action, env);
    if (!baseUrl) return Response.json({ error: 'API not found' }, { status: 404 });

    const paramKey = PARAM_MAP[action] || 'q';
    const param = url.searchParams.get(paramKey) || url.searchParams.get('q') || '';
    const sep = baseUrl.includes('?') ? '&' : '?';
    const finalUrl = `${baseUrl}${sep}${paramKey}=${encodeURIComponent(param)}`;

    const apiRes = await fetch(finalUrl);
    let apiData;
    try { apiData = await apiRes.json(); }
    catch { apiData = { raw: await apiRes.text() }; }

    await updateUsage(key, env);
    await logAPICall(key, action, param, env);

    const sanitized = sanitizeResponse(apiData);
    return Response.json({ status: true, action, data: sanitized });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

// ---------- SANITIZE (removes credit / attribution keys) ----------
function sanitizeResponse(data) {
  const blacklistExact = new Set(['credit', 'developer', 'author', 'owner', 'contact', 'footer', 'telegram', 'maker', 'created_by', 'tg', 'channel', 'powered_by']);
  const blacklistContains = ['credit', 'developer', 'powered', 'alonepatel'];
  if (Array.isArray(data)) return data.map(sanitizeResponse);
  if (data && typeof data === 'object') {
    const newObj = {};
    for (const [k, v] of Object.entries(data)) {
      const lk = k.toLowerCase();
      if (blacklistExact.has(lk)) continue;
      if (blacklistContains.some(b => lk.includes(b))) continue;
      newObj[k] = sanitizeResponse(v);
    }
    return newObj;
  }
  return data;
}

// ============================================================
// MAIN FETCH HANDLER
// ============================================================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api' || url.pathname === '/api/') {
      return handleApi(request, env);
    }
    if (request.method === 'POST') {
      return handleBot(request, env);
    }
    return new Response('ALONE PATEL API SERVER — Running ✅ API BANANE ME TERI MA KA BOOR FAAT JAYEGA', { status: 200 });
  }
};