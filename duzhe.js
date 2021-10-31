var body = $response.body;
body=body.replace(/price\":\"(.*?)\"/g,'price":\"0\"').replace(/isvip\":\"(.*?)\"/g,'isvip":\"1\"').replace(/vip\_type\":\"(.*?)\"/g,'vip\_type":\"1\"');
$done({body});
