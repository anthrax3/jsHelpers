(function(){var a={};if(module&&module.exports)module.exports=a;else if(window)window.Async=a;else return;var b=[],c=function(a){for(var c=0;c<b.length;c++)try{b[c](a)}catch(d){}};a.Operation=function(b){b=b||{};var d=[],e=[],f=b.chain&&b.chain===!0?!0:!1,g=!1,h=null;this.result=undefined,this.error=undefined,this.state=f?"waiting":"running",this.completed=!1;var i=function(a){for(var b=0;b<e.length;b++)try{e[b](a)}catch(d){}c(a)};this.yield=function(b){var c=this;if(c.error)return this;f?(g=!0,c.result=b,c.state="chain running",c.completed=!1):(c.result=b,c.state="completed",c.completed=!0),setTimeout(function(){if(!h){while(d.length>0&&!c.error){var b=d.shift();if(f){try{var e=b(c.result)}catch(g){c.error=g,c.state="error",i(c);break}if(e&&e instanceof a.Operation){h=a.chain(),h.onerror(function(a){c.error=h.error,c.state="error",i(c)});while(d.length>0)h.next(d.shift()),h.next(function(a){c.result=a;return a});h.next(function(a){c.state="completed",c.completed=!0;return a}),e.addCallback(function(a){c.result=a,h.go(a)})}else c.result=e}else try{b(c.result)}catch(g){c.error=g,c.state="error",i(c);break}}!h&&!c.error&&(c.state="completed",c.completed=!0)}else{while(d.length>0)h.next(d.shift());h.next(function(a){c.result=a,c.state="completed",c.completed=!0;return a})}},1);return this},this.go=function(a){return this.yield(a)},this.addCallback=function(a){d.push(a),(this.completed||f&&g)&&this.yield(this.result);return this},this.next=function(a){return this.addCallback(a)},this.wait=function(b){var c=this;f&&this.next(function(){return a.wait(b,c.result)});return this},this.onerror=function(a){e.push(a);return this}},a.chain=function(b){var c=new a.Operation({chain:!0});b&&c.next(b);return c},a.go=function(b){return a.chain().go(b)},a.wait=function(b,c){var d=new a.Operation;setTimeout(function(){d.yield(c)},b);return d},a.instant=function(b){return a.wait(0,b)},a.onerror=function(c){b.push(c);return a},Function.prototype.asyncCall=function(){var a=arguments[0],b=[];for(var c=1;c<arguments.length;c++)b.push(arguments[c]);return this.asyncApply(a,b)},Function.prototype.asyncApply=function(b,c){var d=new a.Operation,e=this;setTimeout(function(){d.yield(e.apply(b,c||[]))},1);return d}})()