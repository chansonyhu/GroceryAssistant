// const appName = "美团买菜";

const appName = "叮咚买菜";


launchApp(appName);
let interval = 20
sleep(interval);

auto.waitFor()
// 点击结算
const clickSettle = () => {
  id('btn_submit').click()
  sleep(1000)
}
// 点击我知道了
const clickKnow = () => {
  className("android.view.View").depth(16).findOne().parent().click()
}
//点击放弃机会
const clickGiveup = () => {
  className("android.widget.TextView").text("放弃机会").findOne().parent().parent().click()
  // className("android.view.View").depth(14).findOne().parent().click()
}
// 点击立刻支付
const clickPay = () => {
  
  // let product_time = textStartsWith('请选择送达时间')
  // if (product_time.exists()) {

    id("tv_submit").click()
    
    // id('tv_single_product_time_text').click()

    // product_time.click()

    let timeArray = className("android.widget.TextView").textContains(':').find();
    while (timeArray.length < 1) {
      timeArray = className("android.widget.TextView").textContains(':').find();
    }
    for (let target of timeArray) {
      if (target.clickable()) {
        target.parent().click();
        break;
      }
    }
    id('iv_dialog_select_time_close').click()
  // }
  
  // className("android.widget.TextView").text("立即支付").findOne().click()
}

const hasText = (text) => {
  return textContains(text).exists()
  // return textStartsWith(text).exists() // 是否存在指定文本
}

const add = () => {
  // id('banner_main_search').click()
  className("android.widget.RelativeLayout").depth(13).findOne().parent().parent().click()
}

const start = () => {
  // 是否有结算按钮
  if (hasText("结算")) {
    // 点击结算
    clickSettle()
    sleep(interval)
    start()
  } else if (hasText('当前不在可下单时段') || hasText('很抱歉')) {
    clickKnow()
    sleep(interval)
    start()
  } else if (hasText('立即支付')) {
    sleep(interval)
    clickPay()
    sleep(interval)
    start()
   //  toast('立即支付')
  } else if (hasText('放弃机会')) {
    clickGiveup()
    sleep(interval)
    start()
  } else {
    sleep(interval)
    //   toast('等待')
    start()
  }
}

start()