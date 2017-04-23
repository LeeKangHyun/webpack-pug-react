export default {
  checkAgent: {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    isMobile: function() {
      return (agentCheck.Android() || agentCheck.BlackBerry() || agentCheck.iOS() || agentCheck.Opera() || agentCheck.Windows());
    },
    ie: function() {
      return navigator.userAgent.match(/MSIE/i);
    },
    Chrome: function() {
      return navigator.userAgent.match(/Chrome/i);
    },
  }
};