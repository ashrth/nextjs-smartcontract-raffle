(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113,917],{21357:function(e,b,a){"use strict";a.r(b),a.d(b,{WalletConnectV1Adapter:function(){return k}});var f=a(4942),g=a(71516),c=a(41436),h=a(52062),d=a(2043),i=a.n(d);function j(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}class k extends c.J5{constructor(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};super(),(0,f.Z)(this,"name",c.rW.WALLET_CONNECT_V1),(0,f.Z)(this,"adapterNamespace",c.yk.EIP155),(0,f.Z)(this,"currentChainNamespace",c.EN.EIP155),(0,f.Z)(this,"type",c.hN.EXTERNAL),(0,f.Z)(this,"adapterOptions",void 0),(0,f.Z)(this,"status",c.MP.NOT_READY),(0,f.Z)(this,"adapterData",{uri:""}),(0,f.Z)(this,"connector",null),(0,f.Z)(this,"wcProvider",null),(0,f.Z)(this,"rehydrated",!1),this.adapterOptions=function(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?j(Object(b),!0).forEach(function(a){(0,f.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}({},a),this.chainConfig=a.chainConfig||null}get connected(){var a;return!!(null!==(a=this.connector)&& void 0!==a&&a.connected)}get provider(){var a;return(null===(a=this.wcProvider)|| void 0===a?void 0:a.provider)||null}set provider(a){throw new Error("Not implemented")}async init(){super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=(0,c.h2)(c.EN.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new h.WalletConnectProvider({config:{chainConfig:this.chainConfig}}),this.emit(c.n2.READY,c.rW.WALLET_CONNECT_V1),this.status=c.MP.READY,this.connector.connected&&(this.rehydrated=!0,await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()}))}async connect(){if(super.checkConnectionRequirements(),!this.connector)throw c.Ty.notReady("Wallet adapter is not ready yet");if(this.connected)return await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()}),this.provider;if(this.status!==c.MP.CONNECTING){var a;null!==(a=this.adapterOptions.adapterSettings)&& void 0!==a&&a.qrcodeModal&&(this.connector=this.getWalletConnectInstance()),await this.createNewSession(),this.status=c.MP.CONNECTING,this.emit(c.n2.CONNECTING,{adapter:c.rW.WALLET_CONNECT_V1})}return new Promise((d,b)=>{if(!this.connector)return b(c.Ty.notReady("Wallet adapter is not ready yet"));this.connector.on("modal_closed",async()=>(this.status=c.MP.READY,this.emit(c.n2.READY,c.rW.WALLET_CONNECT_V1),b(new Error("User closed modal"))));try{this.connector.on("connect",async(a,b)=>(a&&this.emit(c.n2.ERRORED,a),await this.onConnectHandler(b.params[0]),d(this.provider)))}catch(a){i().error("Wallet connect v1 adapter error while connecting",a),this.status=c.MP.READY,this.rehydrated=!0,this.emit(c.n2.ERRORED,a),b(a instanceof c.up?a:c.RM.connectionError("Failed to login with wallet connect: ".concat((null==a?void 0:a.message)||"")))}})}async getUserInfo(){if(!this.connected)throw c.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async disconnect(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{cleanup:!1};const{cleanup:b}=a;if(!this.connector||!this.connected)throw c.RM.notConnectedError("Not connected with wallet");await this.connector.killSession(),this.rehydrated=!1,b?(this.connector=null,this.status=c.MP.NOT_READY,this.wcProvider=null):this.status=c.MP.READY,this.emit(c.n2.DISCONNECTED)}async createNewSession(){var a,b,d;let e=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{forceNewSession:!1};if(!this.connector)throw c.Ty.notReady("Wallet adapter is not ready yet");if(e.forceNewSession&&this.connector.pending&&await this.connector.killSession(),null!==(a=this.adapterOptions)&& void 0!==a&&null!==(b=a.adapterSettings)&& void 0!==b&&b.qrcodeModal){await this.connector.createSession({chainId:parseInt((null===(d=this.chainConfig)|| void 0===d?void 0:d.chainId)||"0x1",16)});return}return new Promise((d,b)=>{var a;if(!this.connector)return b(c.Ty.notReady("Wallet adapter is not ready yet"));i().debug("creating new session for web3auth wallet connect"),this.connector.on("display_uri",async(e,f)=>{var a;if(e)return this.emit(c.n2.ERRORED,c.RM.connectionError("Failed to display wallet connect qr code")),b(e);const g=f.params[0];return this.updateAdapterData({uri:g}),null===(a=this.connector)|| void 0===a||a.off("display_uri"),d()}),this.connector.createSession({chainId:parseInt((null===(a=this.chainConfig)|| void 0===a?void 0:a.chainId)||"0x1",16)}).catch(a=>(i().error("error while creating new wallet connect session",a),this.emit(c.n2.ERRORED,a),b(a)))})}async onConnectHandler(d){if(!this.connector||!this.wcProvider)throw c.Ty.notReady("Wallet adapter is not ready yet");if(!this.chainConfig)throw c.Ty.invalidParams("Chain config is not set");const{chainId:a}=d;i().debug("connected chainId",a);const b=parseInt(a,(0,c.H2)(a)?16:10);if(b!==parseInt(this.chainConfig.chainId,16)){await this.createNewSession({forceNewSession:!0}),this.emit(c.n2.ERRORED,c.Ty.fromCode(5e3,"Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId,", Current: ").concat(b,", Please switch to correct chain from wallet")));return}await this.wcProvider.setupProvider(this.connector),this.subscribeEvents(this.connector),this.status=c.MP.CONNECTED,this.emit(c.n2.CONNECTED,{adapter:c.rW.WALLET_CONNECT_V1,reconnected:this.rehydrated})}subscribeEvents(a){a.on("session_update",async a=>{a&&this.emit(c.n2.ERRORED,a)})}getWalletConnectInstance(){const a=this.adapterOptions.adapterSettings||{};return a.bridge=a.bridge||"https://bridge.walletconnect.org",new g.Z(a)}}},62859:function(){},75304:function(){},32772:function(){},64123:function(){},29704:function(){},88924:function(){}}])