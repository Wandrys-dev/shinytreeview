(()=>{var e={259:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(81),s=o.n(n),i=o(645),d=o.n(i)()(s());d.push([e.id,".treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon,.treeview span.image{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.treeview .node-hidden{display:none}.treeview span.image{display:inline-block;height:1.19em;vertical-align:middle;background-size:contain;background-repeat:no-repeat;line-height:1em}.treeview span.icon.node-icon-background{padding:2px;width:calc(1em + 4px);height:calc(1em + 4px);line-height:1em}",""]);const r=d},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(d[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},114:()=>{!function(e,t,o,n){"use strict";var s="treeview",i={};i.settings={injectStyle:!0,levels:2,expandIcon:"glyphicon glyphicon-plus",collapseIcon:"glyphicon glyphicon-minus",loadingIcon:"glyphicon glyphicon-hourglass",emptyIcon:"glyphicon",nodeIcon:"",selectedIcon:"",checkedIcon:"glyphicon glyphicon-check",partiallyCheckedIcon:"glyphicon glyphicon-expand",uncheckedIcon:"glyphicon glyphicon-unchecked",tagsClass:"badge",color:n,backColor:n,borderColor:n,changedNodeColor:"#39A5DC",onhoverColor:"#F5F5F5",selectedColor:"#FFFFFF",selectedBackColor:"#428bca",searchResultColor:"#D9534F",searchResultBackColor:n,highlightSelected:!0,highlightSearchResults:!0,showBorder:!0,showIcon:!0,showImage:!1,showCheckbox:!1,checkboxFirst:!1,highlightChanges:!1,showTags:!1,multiSelect:!1,preventUnselect:!1,allowReselect:!1,hierarchicalCheck:!1,propagateCheckEvent:!1,wrapNodeText:!1,onLoading:n,onLoadingFailed:n,onInitialized:n,onNodeRendered:n,onRendered:n,onDestroyed:n,onNodeChecked:n,onNodeCollapsed:n,onNodeDisabled:n,onNodeEnabled:n,onNodeExpanded:n,onNodeChanged:n,onNodeSelected:n,onNodeUnchecked:n,onNodeUnselected:n,onSearchComplete:n,onSearchCleared:n},i.options={silent:!1,ignoreChildren:!1},i.searchOptions={ignoreCase:!0,exactMatch:!1,revealResults:!0},i.dataUrl={method:"GET",dataType:"json",cache:!1};var d=function(t,o){return this.$element=e(t),this._elementId=t.id,this._styleId=this._elementId+"-style",this._init(o),{options:this._options,init:e.proxy(this._init,this),remove:e.proxy(this._remove,this),findNodes:e.proxy(this.findNodes,this),getNodes:e.proxy(this.getNodes,this),getParents:e.proxy(this.getParents,this),getSiblings:e.proxy(this.getSiblings,this),getSelected:e.proxy(this.getSelected,this),getUnselected:e.proxy(this.getUnselected,this),getExpanded:e.proxy(this.getExpanded,this),getCollapsed:e.proxy(this.getCollapsed,this),getChecked:e.proxy(this.getChecked,this),getUnchecked:e.proxy(this.getUnchecked,this),getDisabled:e.proxy(this.getDisabled,this),getEnabled:e.proxy(this.getEnabled,this),addNode:e.proxy(this.addNode,this),addNodeAfter:e.proxy(this.addNodeAfter,this),addNodeBefore:e.proxy(this.addNodeBefore,this),removeNode:e.proxy(this.removeNode,this),updateNode:e.proxy(this.updateNode,this),selectNode:e.proxy(this.selectNode,this),unselectNode:e.proxy(this.unselectNode,this),toggleNodeSelected:e.proxy(this.toggleNodeSelected,this),collapseAll:e.proxy(this.collapseAll,this),collapseNode:e.proxy(this.collapseNode,this),expandAll:e.proxy(this.expandAll,this),expandNode:e.proxy(this.expandNode,this),toggleNodeExpanded:e.proxy(this.toggleNodeExpanded,this),revealNode:e.proxy(this.revealNode,this),checkAll:e.proxy(this.checkAll,this),checkNode:e.proxy(this.checkNode,this),uncheckAll:e.proxy(this.uncheckAll,this),uncheckNode:e.proxy(this.uncheckNode,this),toggleNodeChecked:e.proxy(this.toggleNodeChecked,this),unmarkCheckboxChanges:e.proxy(this.unmarkCheckboxChanges,this),disableAll:e.proxy(this.disableAll,this),disableNode:e.proxy(this.disableNode,this),enableAll:e.proxy(this.enableAll,this),enableNode:e.proxy(this.enableNode,this),toggleNodeDisabled:e.proxy(this.toggleNodeDisabled,this),search:e.proxy(this.search,this),clearSearch:e.proxy(this.clearSearch,this)}};d.prototype._init=function(t){this._tree=[],this._initialized=!1,this._options=e.extend({},i.settings,t),this._template.icon.empty.addClass(this._options.emptyIcon),this._destroy(),this._subscribeEvents(),this._triggerEvent("loading",null,i.options),this._load(t).then(e.proxy((function(t){return this._tree=e.extend(!0,[],t)}),this),e.proxy((function(e){this._triggerEvent("loadingFailed",e,i.options)}),this)).then(e.proxy((function(e){return this._setInitialStates({nodes:e},0)}),this)).then(e.proxy((function(){this._render()}),this))},d.prototype._load=function(t){var o=new e.Deferred;return t.data?this._loadLocalData(t,o):t.dataUrl&&this._loadRemoteData(t,o),o.promise()},d.prototype._loadRemoteData=function(t,o){e.ajax(e.extend(!0,{},i.dataUrl,t.dataUrl)).done((function(e){o.resolve(e)})).fail((function(e,t,n){o.reject(n)}))},d.prototype._loadLocalData=function(t,o){o.resolve("string"==typeof t.data?JSON.parse(t.data):e.extend(!0,[],t.data))},d.prototype._remove=function(){this._destroy(),e.removeData(this,s),e("#"+this._styleId).remove()},d.prototype._destroy=function(){this._initialized&&(this._initialized=!1,this._triggerEvent("destroyed",null,i.options),this._unsubscribeEvents(),this.$wrapper.remove(),this.$wrapper=null)},d.prototype._unsubscribeEvents=function(){this.$element.off("loading"),this.$element.off("loadingFailed"),this.$element.off("initialized"),this.$element.off("nodeRendered"),this.$element.off("rendered"),this.$element.off("destroyed"),this.$element.off("click"),this.$element.off("nodeChecked"),this.$element.off("nodeCollapsed"),this.$element.off("nodeDisabled"),this.$element.off("nodeEnabled"),this.$element.off("nodeExpanded"),this.$element.off("nodeChanged"),this.$element.off("nodeSelected"),this.$element.off("nodeUnchecked"),this.$element.off("nodeUnselected"),this.$element.off("searchComplete"),this.$element.off("searchCleared")},d.prototype._subscribeEvents=function(){this._unsubscribeEvents(),"function"==typeof this._options.onLoading&&this.$element.on("loading",this._options.onLoading),"function"==typeof this._options.onLoadingFailed&&this.$element.on("loadingFailed",this._options.onLoadingFailed),"function"==typeof this._options.onInitialized&&this.$element.on("initialized",this._options.onInitialized),"function"==typeof this._options.onNodeRendered&&this.$element.on("nodeRendered",this._options.onNodeRendered),"function"==typeof this._options.onRendered&&this.$element.on("rendered",this._options.onRendered),"function"==typeof this._options.onDestroyed&&this.$element.on("destroyed",this._options.onDestroyed),this.$element.on("click",e.proxy(this._clickHandler,this)),"function"==typeof this._options.onNodeChecked&&this.$element.on("nodeChecked",this._options.onNodeChecked),"function"==typeof this._options.onNodeCollapsed&&this.$element.on("nodeCollapsed",this._options.onNodeCollapsed),"function"==typeof this._options.onNodeDisabled&&this.$element.on("nodeDisabled",this._options.onNodeDisabled),"function"==typeof this._options.onNodeEnabled&&this.$element.on("nodeEnabled",this._options.onNodeEnabled),"function"==typeof this._options.onNodeExpanded&&this.$element.on("nodeExpanded",this._options.onNodeExpanded),"function"==typeof this._options.onNodeChanged&&this.$element.on("nodeChanged",this._options.onNodeChanged),"function"==typeof this._options.onNodeSelected&&this.$element.on("nodeSelected",this._options.onNodeSelected),"function"==typeof this._options.onNodeUnchecked&&this.$element.on("nodeUnchecked",this._options.onNodeUnchecked),"function"==typeof this._options.onNodeUnselected&&this.$element.on("nodeUnselected",this._options.onNodeUnselected),"function"==typeof this._options.onSearchComplete&&this.$element.on("searchComplete",this._options.onSearchComplete),"function"==typeof this._options.onSearchCleared&&this.$element.on("searchCleared",this._options.onSearchCleared)},d.prototype._triggerEvent=function(t,o,n){n&&!n.silent&&this.$element.trigger(t,e.extend(!0,{},o))},d.prototype._setInitialStates=function(t,o){return this._nodes={},e.when.apply(this,this._setInitialState(t,o)).done(e.proxy((function(){this._orderedNodes=this._sortNodes(),this._inheritCheckboxChanges(),this._triggerEvent("initialized",this._orderedNodes,i.options)}),this))},d.prototype._setInitialState=function(t,o,s){if(t.nodes){o+=1,s=s||[];var i=t;return e.each(t.nodes,e.proxy((function(t,d){var r=new e.Deferred;s.push(r.promise()),d.level=o,d.index=t,d.nodeId=i&&i.nodeId?i.nodeId+"."+d.index:o-1+"."+d.index,d.parentId=i.nodeId,d.hasOwnProperty("selectable")||(d.selectable=!0),d.hasOwnProperty("checkable")||(d.checkable=!0),d.state=d.state||{},d.state.hasOwnProperty("checked")||(d.state.checked=!1),this._options.hierarchicalCheck&&"undefined"===d.state.checked&&(d.state.checked=n),d.state.hasOwnProperty("disabled")||(d.state.disabled=!1),d.state.hasOwnProperty("expanded")||(!d.state.disabled&&o<this._options.levels&&d.nodes&&d.nodes.length>0?d.state.expanded=!0:d.state.expanded=!1),d.state.hasOwnProperty("selected")||(d.state.selected=!1),i&&i.state&&i.state.expanded||o<=this._options.levels?d.state.visible=!0:d.state.visible=!1,d.nodes&&(d.nodes.length>0?this._setInitialState(d,o,s):delete d.nodes),this._nodes[d.nodeId]=d,r.resolve()}),this)),s}},d.prototype._sortNodes=function(){return e.map(Object.keys(this._nodes).sort((function(e,t){if(e===t)return 0;e=e.split(".").map((function(e){return parseInt(e)})),t=t.split(".").map((function(e){return parseInt(e)}));for(var o=Math.max(e.length,t.length),s=0;s<o;s++){if(e[s]===n)return-1;if(t[s]===n)return 1;if(e[s]-t[s]>0)return 1;if(e[s]-t[s]<0)return-1}})),e.proxy((function(e,t){return this._nodes[e]}),this))},d.prototype._clickHandler=function(t){var o=e(t.target),n=this.targetNode(o);if(n&&!n.state.disabled){var s=o.attr("class")?o.attr("class").split(" "):[];-1!==s.indexOf("expand-icon")?this._toggleExpanded(n,e.extend({},i.options)):-1!==s.indexOf("check-icon")?n.checkable&&this._toggleChecked(n,e.extend({},i.options)):n.selectable?this._toggleSelected(n,e.extend({},i.options)):this._toggleExpanded(n,e.extend({},i.options))}},d.prototype.targetNode=function(e){var t=e.closest("li.list-group-item").attr("data-nodeId"),o=this._nodes[t];return o||console.log("Error: node does not exist"),o},d.prototype._toggleExpanded=function(e,t){e&&("function"==typeof this._options.lazyLoad&&e.lazyLoad?this._lazyLoad(e):this._setExpanded(e,!e.state.expanded,t))},d.prototype._lazyLoad=function(e){e.$el.children("span.expand-icon").removeClass(this._options.expandIcon).addClass(this._options.loadingIcon);var t=this;this._options.lazyLoad(e,(function(o){t.addNode(o,e)})),delete e.lazyLoad},d.prototype._setExpanded=function(t,o,n){n&&o===t.state.expanded||(o&&t.nodes?(t.state.expanded=!0,t.$el&&t.$el.children("span.expand-icon").removeClass(this._options.expandIcon).removeClass(this._options.loadingIcon).addClass(this._options.collapseIcon),t.nodes&&n&&e.each(t.nodes,e.proxy((function(e,t){this._setVisible(t,!0,n)}),this)),this._triggerEvent("nodeExpanded",t,n)):o||(t.state.expanded=!1,t.$el&&t.$el.children("span.expand-icon").removeClass(this._options.collapseIcon).addClass(this._options.expandIcon),t.nodes&&n&&e.each(t.nodes,e.proxy((function(e,t){this._setVisible(t,!1,n),this._setExpanded(t,!1,n)}),this)),this._triggerEvent("nodeCollapsed",t,n)))},d.prototype._setVisible=function(e,t,o){o&&t===e.state.visible||(t?(e.state.visible=!0,e.$el&&e.$el.removeClass("node-hidden")):(e.state.visible=!1,e.$el&&e.$el.addClass("node-hidden")))},d.prototype._toggleSelected=function(e,t){if(e)return this._setSelected(e,!e.state.selected,t),this},d.prototype._setSelected=function(t,o,n,s){if(!n||o!==t.state.selected){if(o)this._options.multiSelect||e.each(this._findNodes("true","state.selected"),e.proxy((function(t,o){this._setSelected(o,!1,e.extend(n,{unselecting:!0}),!0)}),this)),t.state.selected=!0,t.$el&&(t.$el.addClass("node-selected"),(t.selectedIcon||this._options.selectedIcon)&&t.$el.children("span.node-icon").removeClass(t.icon||this._options.nodeIcon).addClass(t.selectedIcon||this._options.selectedIcon)),this._triggerEvent("nodeSelected",t,n),this._triggerEvent("nodeChanged",t,n);else{if(this._options.preventUnselect&&n&&!n.unselecting&&1===this._findNodes("true","state.selected").length)return this._options.allowReselect&&(this._triggerEvent("nodeSelected",t,n),this._triggerEvent("nodeChanged",t,n)),this;t.state.selected=!1,t.$el&&(t.$el.removeClass("node-selected"),(t.selectedIcon||this._options.selectedIcon)&&t.$el.children("span.node-icon").removeClass(t.selectedIcon||this._options.selectedIcon).addClass(t.icon||this._options.nodeIcon)),this._triggerEvent("nodeUnselected",t,n),s||this._triggerEvent("nodeChanged",t,n)}return this}},d.prototype._inheritCheckboxChanges=function(){this._options.showCheckbox&&this._options.highlightChanges&&(this._checkedNodes=e.grep(this._orderedNodes,(function(e){return e.state.checked})))},d.prototype._toggleChecked=function(t,o){if(t){if(this._options.hierarchicalCheck){var s,i=e.extend({},o,{silent:o.silent||!this._options.propagateCheckEvent}),d=t;for(t.state.checked=!t.state.checked;d=this._nodes[d.parentId];)s=d.nodes.reduce((function(e,t){return e===t.state.checked?e:n}),d.nodes[0].state.checked),this._setChecked(d,s,i);if(t.nodes&&t.nodes.length>0)for(var r,a=t.nodes.slice();a&&a.length>0;)r=a.pop(),this._setChecked(r,t.state.checked,i),r.nodes&&r.nodes.length>0&&(a=a.concat(r.nodes.slice()));t.state.checked=!t.state.checked}this._setChecked(t,!t.state.checked,o)}},d.prototype._setChecked=function(e,t,o){o&&t===e.state.checked||(this._options.highlightChanges&&e.$el.toggleClass("node-check-changed",-1==this._checkedNodes.indexOf(e)==t),t?(e.state.checked=!0,e.$el&&(e.$el.addClass("node-checked").removeClass("node-checked-partial"),e.$el.children("span.check-icon").removeClass(this._options.uncheckedIcon).removeClass(this._options.partiallyCheckedIcon).addClass(this._options.checkedIcon)),this._triggerEvent("nodeChecked",e,o)):t===n&&this._options.hierarchicalCheck?(e.state.checked=n,e.$el&&(e.$el.addClass("node-checked-partial").removeClass("node-checked"),e.$el.children("span.check-icon").removeClass(this._options.uncheckedIcon).removeClass(this._options.checkedIcon).addClass(this._options.partiallyCheckedIcon)),this._triggerEvent("nodeUnchecked",e,o)):(e.state.checked=!1,e.$el&&(e.$el.removeClass("node-checked node-checked-partial"),e.$el.children("span.check-icon").removeClass(this._options.checkedIcon).removeClass(this._options.partiallyCheckedIcon).addClass(this._options.uncheckedIcon)),this._triggerEvent("nodeUnchecked",e,o)))},d.prototype._setDisabled=function(e,t,o){o&&t===e.state.disabled||(t?(e.state.disabled=!0,o&&!o.keepState&&(this._setSelected(e,!1,o),this._setChecked(e,!1,o),this._setExpanded(e,!1,o)),e.$el&&e.$el.addClass("node-disabled"),this._triggerEvent("nodeDisabled",e,o)):(e.state.disabled=!1,e.$el&&e.$el.removeClass("node-disabled"),this._triggerEvent("nodeEnabled",e,o)))},d.prototype._setSearchResult=function(e,t,o){o&&t===e.searchResult||(t?(e.searchResult=!0,e.$el&&e.$el.addClass("node-result")):(e.searchResult=!1,e.$el&&e.$el.removeClass("node-result")))},d.prototype._render=function(){var t;this._initialized||(this.$wrapper=this._template.tree.clone(),this.$element.empty().addClass(s).append(this.$wrapper),this._injectStyle(),this._initialized=!0),e.each(this._orderedNodes,e.proxy((function(e,o){this._renderNode(o,t),t=o}),this)),this._triggerEvent("rendered",this._orderedNodes,i.options)},d.prototype._renderNode=function(t,o){if(t){t.$el?t.$el.empty():t.$el=this._newNodeEl(t,o).addClass("node-"+this._elementId),t.$el.addClass(t.class),t.id&&t.$el.attr("id",t.id),t.dataAttr&&e.each(t.dataAttr,(function(e,o){t.$el.attr("data-"+e,o)})),t.$el.attr("data-nodeId",t.nodeId),t.tooltip&&t.$el.attr("title",t.tooltip);for(var s=0;s<t.level-1;s++)t.$el.append(this._template.indent.clone());if(t.$el.append(t.nodes||t.lazyLoad?this._template.icon.expand.clone():this._template.icon.empty.clone()),this._options.checkboxFirst?(this._addCheckbox(t),this._addIcon(t),this._addImage(t)):(this._addIcon(t),this._addImage(t),this._addCheckbox(t)),this._options.wrapNodeText){var d=this._template.text.clone();t.$el.append(d),d.append(t.text)}else t.$el.append(t.text);this._options.showTags&&t.tags&&e.each(t.tags,e.proxy((function(e,o){t.$el.append(this._template.badge.clone().addClass(("object"==typeof o?o.class:n)||t.tagsClass||this._options.tagsClass).append(("object"==typeof o?o.text:n)||o))}),this)),this._setSelected(t,t.state.selected),this._setChecked(t,t.state.checked),this._setSearchResult(t,t.searchResult),this._setExpanded(t,t.state.expanded),this._setDisabled(t,t.state.disabled),this._setVisible(t,t.state.visible),this._triggerEvent("nodeRendered",t,i.options)}},d.prototype._addCheckbox=function(e){!this._options.showCheckbox||e.hideCheckbox!==n&&!1!==e.hideCheckbox||e.$el.append(this._template.icon.check.clone())},d.prototype._addIcon=function(e){if(this._options.showIcon&&(!this._options.showImage||!e.image)){var t=this._template.icon.node.clone().addClass(e.icon||this._options.nodeIcon);e.iconColor&&t.css("color",e.iconColor),e.iconBackground&&(t.addClass("node-icon-background"),t.css("background",e.iconBackground)),e.$el.append(t)}},d.prototype._addImage=function(e){this._options.showImage&&e.image&&e.$el.append(this._template.image.clone().addClass("node-image").css("background-image","url('"+e.image+"')"))},d.prototype._newNodeEl=function(e,t){var o=this._template.node.clone();return t?t.$el.after(o):this.$wrapper.prepend(o),o},d.prototype._removeNodeEl=function(t){t&&(t.nodes&&e.each(t.nodes,e.proxy((function(e,t){this._removeNodeEl(t)}),this)),t.$el.remove())},d.prototype._expandNode=function(t){t.nodes&&e.each(t.nodes.slice(0).reverse(),e.proxy((function(e,o){o.level=t.level+1,this._renderNode(o,t.$el)}),this))},d.prototype._injectStyle=function(){this._options.injectStyle&&!o.getElementById(this._styleId)&&e('<style type="text/css" id="'+this._styleId+'"> '+this._buildStyle()+" </style>").appendTo("head")},d.prototype._buildStyle=function(){var t=".node-"+this._elementId+"{";if(this._options.color&&(t+="color:"+this._options.color+";"),this._options.backColor&&(t+="background-color:"+this._options.backColor+";"),this._options.showBorder?this._options.borderColor&&(t+="border:1px solid "+this._options.borderColor+";"):t+="border:none;",t+="}",this._options.onhoverColor&&(t+=".node-"+this._elementId+":not(.node-disabled):hover{background-color:"+this._options.onhoverColor+";}"),this._options.highlightSearchResults&&(this._options.searchResultColor||this._options.searchResultBackColor)){var o="";this._options.searchResultColor&&(o+="color:"+this._options.searchResultColor+";"),this._options.searchResultBackColor&&(o+="background-color:"+this._options.searchResultBackColor+";"),t+=".node-"+this._elementId+".node-result{"+o+"}",t+=".node-"+this._elementId+".node-result:hover{"+o+"}"}return this._options.highlightSelected&&(this._options.selectedColor||this._options.selectedBackColor)&&(o="",this._options.selectedColor&&(o+="color:"+this._options.selectedColor+";"),this._options.selectedBackColor&&(o+="background-color:"+this._options.selectedBackColor+";"),t+=".node-"+this._elementId+".node-selected{"+o+"}",t+=".node-"+this._elementId+".node-selected:hover{"+o+"}"),this._options.highlightChanges&&(o="color: "+this._options.changedNodeColor+";",t+=".node-"+this._elementId+".node-check-changed{"+o+"}"),e.each(this._orderedNodes,e.proxy((function(e,o){if(o.color||o.backColor){var n="";o.color&&(n+="color:"+o.color+";"),o.backColor&&(n+="background-color:"+o.backColor+";"),t+=".node-"+this._elementId+'[data-nodeId="'+o.nodeId+'"]{'+n+"}"}}),this)),this._css+t},d.prototype._template={tree:e('<ul class="list-group"></ul>'),node:e('<li class="list-group-item"></li>'),indent:e('<span class="indent"></span>'),icon:{node:e('<span class="icon node-icon"></span>'),expand:e('<span class="icon expand-icon"></span>'),check:e('<span class="icon check-icon"></span>'),empty:e('<span class="icon"></span>')},image:e('<span class="image"></span>'),badge:e("<span></span>"),text:e('<span class="text"></span>')},d.prototype._css=".treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}",d.prototype.findNodes=function(e,t,o){return this._findNodes(e,t,o)},d.prototype.getNodes=function(){return this._orderedNodes},d.prototype.getParents=function(t){t instanceof Array||(t=[t]);var o=[];return e.each(t,e.proxy((function(e,t){var n=!!t.parentId&&this._nodes[t.parentId];n&&o.push(n)}),this)),o},d.prototype.getSiblings=function(t){t instanceof Array||(t=[t]);var o=[];return e.each(t,e.proxy((function(e,t){var n=this.getParents([t]),s=n[0]?n[0].nodes:this._tree;o=s.filter((function(e){return e.nodeId!==t.nodeId}))}),this)),e.map(o,(function(e){return e}))},d.prototype.getSelected=function(){return this._findNodes("true","state.selected")},d.prototype.getUnselected=function(){return this._findNodes("false","state.selected")},d.prototype.getExpanded=function(){return this._findNodes("true","state.expanded")},d.prototype.getCollapsed=function(){return this._findNodes("false","state.expanded")},d.prototype.getChecked=function(){return this._findNodes("true","state.checked")},d.prototype.getUnchecked=function(){return this._findNodes("false","state.checked")},d.prototype.getDisabled=function(){return this._findNodes("true","state.disabled")},d.prototype.getEnabled=function(){return this._findNodes("false","state.disabled")},d.prototype.addNode=function(t,o,n,s){var d;t instanceof Array||(t=[t]),o instanceof Array&&(o=o[0]),s=e.extend({},i.options,s),d=o&&o.nodes?o.nodes:o?o.nodes=[]:this._tree,e.each(t,e.proxy((function(e,t){var o="number"==typeof n?n+e:d.length+1;d.splice(o,0,t)}),this)),this._setInitialStates({nodes:this._tree},0).done(e.proxy((function(){o&&!o.state.expanded&&this._setExpanded(o,!0,s),this._render()}),this))},d.prototype.addNodeAfter=function(t,o,n){t instanceof Array||(t=[t]),o instanceof Array&&(o=o[0]),n=e.extend({},i.options,n),this.addNode(t,this.getParents(o)[0],o.index+1,n)},d.prototype.addNodeBefore=function(t,o,n){t instanceof Array||(t=[t]),o instanceof Array&&(o=o[0]),n=e.extend({},i.options,n),this.addNode(t,this.getParents(o)[0],o.index,n)},d.prototype.removeNode=function(t,o){var n;t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){((n=this._nodes[t.parentId])?n.nodes:this._tree).splice(t.index,1),this._removeNodeEl(t)}),this)),this._setInitialStates({nodes:this._tree},0).done(this._render.bind(this))},d.prototype.updateNode=function(t,o,n){t instanceof Array&&(t=t[0]),n=e.extend({},i.options,n);var s=this._nodes[t.parentId];(s?s.nodes:this._tree).splice(t.index,1,o),this._removeNodeEl(t),this._setInitialStates({nodes:this._tree},0).done(this._render.bind(this))},d.prototype.selectNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setSelected(t,!0,o)}),this))},d.prototype.unselectNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setSelected(t,!1,o)}),this))},d.prototype.toggleNodeSelected=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._toggleSelected(t,o)}),this))},d.prototype.collapseAll=function(t){(t=e.extend({},i.options,t)).levels=t.levels||999,this.collapseNode(this._tree,t)},d.prototype.collapseNode=function(t,o){o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setExpanded(t,!1,o)}),this))},d.prototype.expandAll=function(t){(t=e.extend({},i.options,t)).levels=t.levels||999,this.expandNode(this._tree,t)},d.prototype.expandNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){t.state.expanded||("function"==typeof this._options.lazyLoad&&t.lazyLoad&&this._lazyLoad(t),this._setExpanded(t,!0,o),t.nodes&&this._expandLevels(t.nodes,o.levels-1,o))}),this))},d.prototype._expandLevels=function(t,o,n){t instanceof Array||(t=[t]),n=e.extend({},i.options,n),e.each(t,e.proxy((function(e,t){this._setExpanded(t,o>0,n),t.nodes&&this._expandLevels(t.nodes,o-1,n)}),this))},d.prototype.revealNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){for(var n,s=t;n=this.getParents([s])[0];)s=n,this._setExpanded(s,!0,o)}),this))},d.prototype.toggleNodeExpanded=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._toggleExpanded(t,o)}),this))},d.prototype.checkAll=function(t){t=e.extend({},i.options,t);var o=e.grep(this._orderedNodes,(function(e){return!e.state.checked}));e.each(o,e.proxy((function(e,o){this._setChecked(o,!0,t)}),this))},d.prototype.checkNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setChecked(t,!0,o)}),this))},d.prototype.uncheckAll=function(t){t=e.extend({},i.options,t);var o=e.grep(this._orderedNodes,(function(e){return e.state.checked||e.state.checked===n}));e.each(o,e.proxy((function(e,o){this._setChecked(o,!1,t)}),this))},d.prototype.uncheckNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setChecked(t,!1,o)}),this))},d.prototype.toggleNodeChecked=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._toggleChecked(t,o)}),this))},d.prototype.unmarkCheckboxChanges=function(){this._inheritCheckboxChanges(),e.each(this._nodes,(function(e,t){t.$el.removeClass("node-check-changed")}))},d.prototype.disableAll=function(t){t=e.extend({},i.options,t);var o=this._findNodes("false","state.disabled");e.each(o,e.proxy((function(e,o){this._setDisabled(o,!0,t)}),this))},d.prototype.disableNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setDisabled(t,!0,o)}),this))},d.prototype.enableAll=function(t){t=e.extend({},i.options,t);var o=this._findNodes("true","state.disabled");e.each(o,e.proxy((function(e,o){this._setDisabled(o,!1,t)}),this))},d.prototype.enableNode=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setDisabled(t,!1,o)}),this))},d.prototype.toggleNodeDisabled=function(t,o){t instanceof Array||(t=[t]),o=e.extend({},i.options,o),e.each(t,e.proxy((function(e,t){this._setDisabled(t,!t.state.disabled,o)}),this))},d.prototype.search=function(t,o){o=e.extend({},i.searchOptions,o);var n=this._getSearchResults(),s=[];if(t&&t.length>0){o.exactMatch&&(t="^"+t+"$");var d="g";o.ignoreCase&&(d+="i"),s=this._findNodes(t,"text",d)}return e.each(this._diffArray(s,n),e.proxy((function(e,t){this._setSearchResult(t,!1,o)}),this)),e.each(this._diffArray(n,s),e.proxy((function(e,t){this._setSearchResult(t,!0,o)}),this)),s&&o.revealResults&&this.revealNode(s),this._triggerEvent("searchComplete",s,o),s},d.prototype.clearSearch=function(t){t=e.extend({},{render:!0},t);var o=e.each(this._getSearchResults(),e.proxy((function(e,o){this._setSearchResult(o,!1,t)}),this));this._triggerEvent("searchCleared",o,t)},d.prototype._getSearchResults=function(){return this._findNodes("true","searchResult")},d.prototype._diffArray=function(t,o){var n=[];return e.grep(o,(function(o){-1===e.inArray(o,t)&&n.push(o)})),n},d.prototype._findNodes=function(t,o,n){return o=o||"text",n=n||"g",e.grep(this._orderedNodes,e.proxy((function(e){var s=this._getNodeValue(e,o);if("string"==typeof s)return s.match(new RegExp(t,n))}),this))},d.prototype._getNodeValue=function(e,t){var o=t.indexOf(".");if(o>0){var s=e[t.substring(0,o)],i=t.substring(o+1,t.length);return this._getNodeValue(s,i)}return e.hasOwnProperty(t)&&e[t]!==n?e[t].toString():n};var r=function(e){t.console&&t.console.error(e)};e.fn[s]=function(t,o){var n;if(0==this.length)throw"No element has been found!";return this.each((function(){var i=e.data(this,s);"string"==typeof t?i?e.isFunction(i[t])&&"_"!==t.charAt(0)?(o instanceof Array||(o=[o]),n=i[t].apply(i,o)):r("No such method : "+t):r("Not initialized, can not call method : "+t):"boolean"==typeof t?n=i:e.data(this,s,new d(this,e.extend(!0,{},t)))})),n||this}}(jQuery,window,document)},379:e=>{"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},d=[],r=0;r<e.length;r++){var a=e[r],c=n.base?a[0]+n.base:a[0],l=i[c]||0,h="".concat(c," ").concat(l);i[c]=l+1;var p=o(h),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=s(u,n);n.byIndex=r,t.splice(r,0,{identifier:h,updater:f,references:1})}d.push(h)}return d}function s(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,s){var i=n(e=e||[],s=s||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var r=o(i[d]);t[r].references--}for(var a=n(e,s),c=0;c<i.length;c++){var l=o(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},569:e=>{"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var s=void 0!==o.layer;s&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,s&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{"use strict";const e=jQuery;var t=o.n(e);Shiny,o(114);var n=o(379),s=o.n(n),i=o(795),d=o.n(i),r=o(569),a=o.n(r),c=o(565),l=o.n(c),h=o(216),p=o.n(h),u=o(589),f=o.n(u),g=o(259),y={};y.styleTagTransform=f(),y.setAttributes=l(),y.insert=a().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=p(),s()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var _=new Shiny.InputBinding;t().extend(_,{find:function(e){return t()(e).find(".treeview-input")},getId:function(e){return e.id},getType:function(e){return"name"==t()(e).attr("data-return")?"treeview.name":"id"==t()(e).attr("data-return")?"treeview.id":"treeview.all"},getValue:function(e){var o=t()(e).data("treeview");try{return o.getSelected()}catch(e){return null}},setValue:function(e,t){},subscribe:function(e,o){t()(e).on("initialized",(function(e,t){o()})),t()(e).on("nodeSelected",(function(e,t){o()})),t()(e).on("nodeUnselected",(function(e,t){o()}))},unsubscribe:function(e){t()(e).off(".treeviewInputBinding")},receiveMessage:function(e,o){var n=t()(e).data("treeview");if(o.hasOwnProperty("search")&&(o.search.collapse&&n.collapseAll(),o.search.pattern.length>1?o.search.pattern.map((function(e){n.search(e,o.search.options)})):n.search(o.search.pattern,o.search.options)),o.hasOwnProperty("expand"))if(o.expand.hasOwnProperty("nodeId")){var s=n.findNodes("^"+o.expand.nodeId+"$","nodeId");n.expandNode(s,o.expand.options)}else n.expandAll(o.expand.options);if(o.hasOwnProperty("collapse"))if(o.collapse.hasOwnProperty("nodeId")){var i=n.findNodes("^"+o.collapse.nodeId+"$","nodeId");n.collapseNode(i)}else n.collapseAll()},getState:function(e){},initialize:function(e){var o=document.getElementById(e.id).querySelector('script[data-for="'+e.id+'"]');o=JSON.parse(o.innerHTML),t()(e).treeview(o.config);var n=t()(e).treeview(!0);t()(e).on("rendered ",(function(t,s){if(o.hasOwnProperty("selected")){var i;for(let e=0;e<o.selected.length;e++){i=n.search(o.selected[e],{ignoreCase:!1,exactMatch:!0,revealResults:!1}),n.selectNode(i);var d=n.getParents(i),r=Math.max.apply(Math,d.map((function(e){return e.level})));n.expandNode(d,{levels:r,silent:!0})}n.clearSearch()}var a=n.getNodes().map((function(e){return{text:e.text,nodeId:e.nodeId,parentId:e.parentId}}));Shiny.onInputChange(e.id+"_nodes:treeview.nodes",a)}))}}),Shiny.inputBindings.register(_,"shinytreeview.treeviewInput");var x=new Shiny.InputBinding;t().extend(x,{find:function(e){return t()(e).find(".treecheck-input")},getId:function(e){return e.id},getType:function(e){return"name"==t()(e).attr("data-return")?"treeview.name":"id"==t()(e).attr("data-return")?"treeview.id":"treeview.all"},getValue:function(e){var o=t()(e).data("treeview");try{return o.getChecked()}catch(e){return null}},setValue:function(e,t){},subscribe:function(e,o){t()(e).on("nodeChecked",(function(e,t){o()})),t()(e).on("nodeUnchecked",(function(e,t){o()}))},unsubscribe:function(e){t()(e).off(".treecheckInputBinding")},receiveMessage:function(e,o){var n=t()(e).data("treeview");if(o.hasOwnProperty("search")&&(o.search.collapse&&n.collapseAll(),o.search.pattern.length>1?o.search.pattern.map((function(e){n.search(e,o.search.options)})):n.search(o.search.pattern,o.search.options)),o.hasOwnProperty("expand"))if(o.expand.hasOwnProperty("nodeId")){var s=n.findNodes("^"+o.expand.nodeId+"$","nodeId");n.expandNode(s,o.expand.options)}else n.expandAll(o.expand.options);if(o.hasOwnProperty("collapse"))if(o.collapse.hasOwnProperty("nodeId")){var i=n.findNodes("^"+o.collapse.nodeId+"$","nodeId");n.collapseNode(i)}else n.collapseAll()},getState:function(e){},initialize:function(e){var o=document.getElementById(e.id).querySelector('script[data-for="'+e.id+'"]');o=JSON.parse(o.innerHTML),t()(e).treeview(o.config);var n=t()(e).treeview(!0);t()(e).on("rendered ",(function(t,s){if(o.hasOwnProperty("selected")){var i;for(let e=0;e<o.selected.length;e++)i=n.search(o.selected[e],{ignoreCase:!1,exactMatch:!0,revealResults:!1}),n.toggleNodeChecked(i);n.search("",{ignoreCase:!1,exactMatch:!0,revealResults:!1})}var d=n.getNodes().map((function(e){return{text:e.text,nodeId:e.nodeId,parentId:e.parentId}}));Shiny.onInputChange(e.id+"_nodes:treeview.nodes",d)}))}}),Shiny.inputBindings.register(x,"shinytreeview.treecheckInput")})()})();