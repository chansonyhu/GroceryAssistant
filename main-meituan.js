const appName = "美团买菜";


launchApp(appName);
let interval = 110;
let short_interval = 20;
sleep(interval);
auto.waitFor;
// 点击结算
const clickSettle = () => {
  // id("vs_main_tab_home").findOnce().click()
  // id("img_shopping_cart").findOnce().parent().click()

  className("android.widget.TextView").textStartsWith("结算(").findOne().parent().click();
  //settleBtn.click();
  sleep(short_interval);
};
// 点击我知道了
const clickKnow = () => {
  //sleep(short_interval)
  //  className("android.widget.TextView").text("我知道了").findOne().parent().click();
  // className("android.view.View").depth(15).findOne().click()
  if (textStartsWith('我知道了').exists()) {
    sleep(short_interval);
    try {
      textStartsWith("我知道了").findOnce().parent().click();
      // className("android.widget.TextView").text("我知道了").findOnce().parent().click();
    } catch (e) {sleep(short_interval);}

  } else if (textStartsWith('返回购物车').exists()) {
    sleep(short_interval);
    try {
      // className("android.widget.TextView").text("返回购物车").findOnce().parent().click();
      textStartsWith("返回购物车").findOnce().parent().click();
    } catch (e) {sleep(short_interval);}
  }
  // sleep(50)
  sleep(120);
};
//点击放弃机会
const clickGiveup = () => {
  className("android.widget.TextView").text("放弃机会").findOnce().parent().parent().click();
  // className("android.view.View").depth(14).findOne().parent().click()
};
// 点击立刻支付
const clickPay = () => {
  className("android.widget.TextView").text("立即支付").findOne().parent().click();
  // className("android.view.ViewGroup").depth(14).findOne().click()
  sleep(20);
  let timeArray = className("android.widget.TextView").textContains('-1').find();
  while (timeArray.length < 1) {
    timeArray = className("android.widget.TextView").textContains('-1').find();
  }
  let target = timeArray.get(timeArray.length / 2);
  target.parent().click();
  sleep(20);
  className("android.widget.TextView").text("立即支付").findOne().parent().click();
};
// 点击确认并支付
const clickConfirm = () => {
  className("android.widget.TextView").textStartsWith("确认并支付").findOne(20).parent().click();
};
const hasText = (text) => {
  return textStartsWith(text).exists();
};

const start = () => {
  // 是否有结算按钮
  sleep(interval);
  if (hasText('很抱歉，当前不在') || hasText('配送运力已约满') || hasText('前方拥堵')) {
    sleep(interval);
    clickKnow();
    start();
  } else if (hasText("结算")) {
    sleep(interval);
    clickSettle();
    start();
  } else if (hasText('立即支付') && !hasText('确认并支付')) {
    clickPay();
    sleep(interval);
    if (hasText('前方拥堵')) {
      sleep(interval);
      clickKnow();
    }
    start();
  } else if (hasText("请确认收货地址")) {
    while (hasText("确认并支付")) {
      clickConfirm();
      sleep(short_interval);
    }
    start();
    toast('抢到了');
  } else if (hasText('放弃机会')) {
    clickGiveup();
    sleep(interval);
    start();
  } else {
    start();
  }
}

start();