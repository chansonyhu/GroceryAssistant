const appName = "叮咚买菜";
launchApp(appName);
let interval = 16;
sleep(interval);

auto.waitFor()
// 点击结算
const clickSettle = () => {
   id('btn_submit').click();
   let handle = textContains('开绿卡会员').exists()
   while (!handle) {
      if (hasText('当前下单人数过多')) {
         textStartsWith("返回购物车").findOne().click();
      } else {
         id("iv_order_back").click();
      }
      //id("iv_order_back").click();
      sleep(5);
      sleep(interval);
      id('btn_submit').click();
      sleep(1500);
      handle = textContains('开绿卡会员').exists()
      sleep(100)
   }
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

const clickBack = () => {
   // id("button_one").click()
   id("bottom_style_two").click();
   //textStartsWith("返回购物车").findOne().click();
   //className("android.widget.TextView").text("").findOne().parent().parent().click()
   // className("android.view.View").depth(14).findOne().parent().click()
}

// 点击立刻支付
const clickPay = () => {

   if (textStartsWith('请选择送达时间').exists()) {
      sleep(20)
      //id("tv_submit").click();

      // id('tv_single_product_time_text').click()

      // product_time.click()

      textStartsWith("请选择送达时间").findOne().click()
      let timeArray = className("android.widget.TextView").textContains(':').find();
      while (timeArray.length < 1) {
         timeArray = className("android.widget.TextView").textContains(':').find();
      }
      let hit = true;
      let target = timeArray.get(timeArray.length / 2);
      target.parent().click();
      //for (let target of timeArray) {
      // if (target.clickable()) {
      //  target.parent().click();
      //  hit = true;
      //   break;
      // }
      //}
      if (!hit) {
         id('iv_dialog_select_time_close').click();
      } else {
         id("tv_submit").click();
      }
   } else {
      id("tv_submit").click();
   }

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
   // sleep(50);
   // 是否有结算按钮
   if (hasText("结算(")) {
      // 点击结算
      clickSettle()
      sleep(interval)
      start()
   } else if (hasText('当前下单人数过多')) {
      sleep(15);
      //clickBack();
      textStartsWith("返回购物车").findOne().click();
      sleep(interval);
      start();
      //  toast('立即支付')
   } else if (hasText('当前不在可下单时段') || hasText('很抱歉')) {
      clickKnow()
      sleep(interval)
      start()
   } else if (hasText('立即支付')) {
      sleep(25)
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