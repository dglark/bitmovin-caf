var BitmovinCafReceiver=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){var e=this;this.onLoad=function(t){var n=t.media.customData;return(null==n?void 0:n.options)&&e.setWithCredentials(n.options),(null==n?void 0:n.drm)&&e.setDRM(n.drm),t},this.onCustomMessage=function(e){console.log("Received custom channel message",e)},this.context=cast.framework.CastReceiverContext.getInstance(),this.player=this.context.getPlayerManager()}return e.prototype.init=function(){this.attachEvents(),this.context.start()},e.prototype.attachEvents=function(){this.player.setMessageInterceptor(cast.framework.messages.MessageType.LOAD,this.onLoad),this.context.addCustomMessageListener("urn:x-cast:com.bitmovin.player.caf",this.onCustomMessage)},e.prototype.setDRM=function(e){var t=e.protectionSystem,n=e.licenseUrl,r=e.headers,a=e.withCredentials;this.context.getPlayerManager().setMediaPlaybackInfoHandler((function(e,i){return i.licenseUrl=n,i.protectionSystem=t,"object"==typeof r&&(i.licenseRequestHandler=function(e){e.headers=r}),a&&(i.licenseRequestHandler=o),i}))},e.prototype.setWithCredentials=function(e){var t=this.context.getPlayerManager(),n=Object.assign(new cast.framework.PlaybackConfig,t.getPlaybackConfig());e.withCredentials&&(n.segmentRequestHandler=o,n.captionsRequestHandler=o),e.manifestWithCredentials&&(n.manifestRequestHandler=o),t.setPlaybackConfig(n)},e}();function o(e){e.withCredentials=!0}t.default=r}]).default;