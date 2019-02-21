/** @format */

let utils = {
  //时间戳转年月日
  getTime(time, type) {
    var date
    if (type) {
      date = new Date(time)
    } else {
      date = new Date(time * 1000)
    }
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    return {
      date,
      year,
      month,
      day,
      ymd: year + '-' + this.setToTime(month) + '-' + this.setToTime(day),
      ymdhms:
        year +
        '-' +
        this.setToTime(month) +
        '-' +
        this.setToTime(day) +
        ' ' +
        this.setToTime(hour) +
        ':' +
        this.setToTime(min) +
        ':' +
        this.setToTime(sec),
      ymdhm:
        year +
        '-' +
        this.setToTime(month) +
        '-' +
        this.setToTime(day) +
        ' ' +
        this.setToTime(hour) +
        ':' +
        this.setToTime(min),
      mdhms:
        this.setToTime(month) +
        '-' +
        this.setToTime(day) +
        ' ' +
        this.setToTime(hour) +
        ':' +
        this.setToTime(min) +
        ':' +
        this.setToTime(sec),
      mdhm:
        this.setToTime(month) +
        '-' +
        this.setToTime(day) +
        ' ' +
        this.setToTime(hour) +
        ':' +
        this.setToTime(min),
      hs: this.setToTime(hour) + ':' + this.setToTime(min)
    }
  },

  //时间补零函数
  setToTime(num) {
    return num < 10 ? '0' + num : num
  },
  // 动态设置title
  setTitle(title) {
    document.title = title
  },

  /*
	阿拉伯数字转中文数字
	参数：
		str:阿拉伯数字   num || str
    */
  toChineseNum(str) {
    str = ('' + str).trim().replace(/^0*/, '') //去掉前面修饰的0
    var match = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '零']
    return (
      ('0000' + str)
        .substr(str.length % 4 || 4)
        .replace(/(\d){4}/g, function(_str, endIndex, startIndex) {
          var dot = (((str.length - 1) / 4) >> 0) - ((startIndex / 4) >> 0)
          var prefix = (function getPrfix(dot) {
            return dot > 2
              ? +_str
                ? dot == 3
                  ? '万'
                  : getPrfix(dot - 1) + '万'
                : ''
              : dot == 1
              ? +_str
                ? '万'
                : ''
              : dot == 2
              ? '亿'
              : ''
          })(dot)
          ;/0+$/g.test(_str) && (prefix += match[10]) //处理单元内后半部分有零的地方
          return +_str
            ? _str.replace(/(\d)(\d)(\d)(\d)/g, function($0, $1, $2, $3, $4) {
                !match[$1] &&
                  (match[$2]
                    ? ($1 = 10)
                    : match[$3]
                    ? ($2 = 10)
                    : match[$4]
                    ? ($3 = 10)
                    : '') //处理相邻单元前半部分
                match[$1] && match[$3] && !match[$2] && ($2 = 10),
                  match[$2] && match[$4] && !match[$3] && ($3 = 10),
                  match[$1] &&
                    match[$4] &&
                    !match[$3] &&
                    !match[$2] &&
                    ($3 = 10) //中间两个连续为0，只是获取最后一个
                return (
                  (match[$1] && ($1 < 10 ? match[$1] + '千' : match[$1])) +
                  (match[$2] && ($2 < 10 ? match[$2] + '百' : match[$2])) +
                  (match[$3] &&
                    ($3 < 10
                      ? $3 == 1
                        ? '十'
                        : match[$3] + '十'
                      : match[$3])) +
                  (match[$4] && match[$4])
                )
              }) + prefix
            : prefix
        })
        .replace(/^零*/g, '')
        .replace(/零*$/g, '')
        .replace(/(零)*/g, '$1')
        .replace(/零亿/g, '亿') || match[10]
    ) //处理连续零的问题
  },

  // 深拷贝
  deepClone(obj) {
    let newObj = obj.push ? [] : {}
    for (var key in obj) {
      if (obj[key] instanceof Object) {
        newObj[key] = this.deepClone(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
    return newObj
  },

  // 函数节流，处理高频触发事件性能问题
  /* 
      func：Function   触发的函数
      wait: Number     触发间隔
  */
  throttle(func, wait) {
    var ctx, args, timeoutID
    var last = 0

    return function throttled() {
      ctx = this
      args = arguments
      var delta = new Date() - last
      if (!timeoutID) {
        if (delta >= wait) {
          call()
        } else {
          timeoutID = setTimeout(call, wait - delta)
        }
      }
    }

    function call() {
      timeoutID = 0
      last = +new Date()
      func.apply(ctx, args)
      ctx = null
      args = null
    }
  },

  //时间差转时分秒
  diffToHSM(diff) {
    var hour = Math.floor(diff / 1000 / 60 / 60)
    var min = Math.floor((diff / 1000 / 60) % 60)
    var sec = Math.floor((diff / 1000) % 60)
    return {
      hour: this.setToTime(hour),
      min: this.setToTime(min),
      sec: this.setToTime(sec)
    }
  },

  // 判断是否移动端
  isMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true
    }
  },
  /* -----------------------------localStorage------------------------------------ */
  /*
   * set localStorage
   */
  setStorage(name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },

  /**
   * get localStorage
   */
  getStorage(name) {
    if (!name) return
    let content = window.localStorage.getItem(name)
    return JSON.parse(content)
  },

  /**
   * delete localStorage
   */
  removeStorage(name) {
    if (!name) return
    window.localStorage.removeItem(name)
  }
}

export default utils
