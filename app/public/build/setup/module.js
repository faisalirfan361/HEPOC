define(["angular","angular-couch-potato","angular-ui-router","angular-resource"],function(a,b){"use strict";var c=a.module("app.setup",["ui.router","ngResource"]);return c.config(["$stateProvider","$couchPotatoProvider",function(a,b){a.state("app.setup",{url:"/setup",views:{"content@app":{controller:"SetupCtrl",templateUrl:"build/setup/setup.html",resolve:{deps:b.resolveDependencies(["setup/SetupCtrl","modules/graphs/directives/inline/sparklineContainer","modules/graphs/directives/inline/easyPieChartContainer","components/chat/directives/chatWidget","components/chat/directives/chatUsers","modules/graphs/directives/vectormap/vectorMap","modules/graphs/directives/flot/flotBasic"])}}},data:{title:"Setup Happy"}})}]),b.configureApp(c),c.run(["$couchPotato",function(a){c.lazy=a}]),c});