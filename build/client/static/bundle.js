/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "updates/" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "updates/" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "15fbda9f2bde49157bca";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/
/******/ 		let cleanup = function NoOp() {};
/******/
/******/ 		const check = function(it) {
/******/ 		  return it && it.Math == Math && it;
/******/ 		};
/******/
/******/ 		const safeThis =
/******/ 		  check(typeof globalThis == 'object' && globalThis) ||
/******/ 		  check(typeof window == 'object' && window) ||
/******/ 		  check(typeof self == 'object' && self) ||
/******/ 		  check(typeof global == 'object' && global) ||
/******/ 		  Function('return this')();
/******/
/******/ 		if (safeThis && safeThis.$RefreshSetup$) {
/******/ 		  cleanup = safeThis.$RefreshSetup$(module.i);
/******/ 		}
/******/
/******/ 		try {
/******/
/******/ 			modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		} finally {
/******/ 		  cleanup();
/******/ 		}
/******/
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8501/static/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/store */ "./src/shared/store/index.ts");
/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/App */ "./src/shared/App.tsx");
/* harmony import */ var _shared_i18n_IntlProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/i18n/IntlProvider */ "./src/shared/i18n/IntlProvider.tsx");
/* harmony import */ var _shared_store_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/store/history */ "./src/shared/store/history.ts");
/* harmony import */ var _shared_styles_Theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/styles/Theme */ "./src/shared/styles/Theme.ts");











var history = Object(_shared_store_history__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Create/use the store
// history MUST be passed here if you want syncing between server on initial route

var store = window.store || Object(_shared_store__WEBPACK_IMPORTED_MODULE_6__["configureStore"])({
  initialState: window.__PRELOADED_STATE__
});
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Router"], {
  history: history
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_i18n_IntlProvider__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet_async__WEBPACK_IMPORTED_MODULE_4__["HelmetProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
  theme: _shared_styles_Theme__WEBPACK_IMPORTED_MODULE_10__["theme"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_App__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), document.getElementById('app'));

if (true) {
  if (true) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/App.module.css":
/*!***********************************!*\
  !*** ./src/shared/App.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"App_wrapper__3W6-3","reactLogo":"App_reactLogo__3Tbqu","container":"App_container__3vKej","point-none":"App_point-none__2GK9G","pointNone":"App_point-none__2GK9G","flex":"App_flex__zF4VN","align-center":"App_align-center__1o-yR","alignCenter":"App_align-center__1o-yR","justify-between":"App_justify-between__1mZcU","justifyBetween":"App_justify-between__1mZcU"};
    if(true) {
      // 1612335941221
      var cssReload = __webpack_require__(/*! ../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/assets/favicon.png */ "./src/shared/assets/favicon.png");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/setAuthToken */ "./src/shared/utils/setAuthToken.ts");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/auth/effects */ "./src/shared/store/auth/effects.ts");
/* harmony import */ var _utils_setData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/setData */ "./src/shared/utils/setData.ts");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Home */ "./src/shared/pages/Home/index.tsx");
/* harmony import */ var _pages_Login_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Login/Login */ "./src/shared/pages/Login/Login.tsx");
/* harmony import */ var _pages_Register_Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Register/Register */ "./src/shared/pages/Register/Register.tsx");
/* harmony import */ var _containers_HeaderContainer_HeaderContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/HeaderContainer/HeaderContainer */ "./src/shared/containers/HeaderContainer/HeaderContainer.tsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/shared/components/Footer/Footer.tsx");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./src/shared/styles/GlobalStyles.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.ts");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./App.module.css */ "./src/shared/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_16__);
var _s = $RefreshSig$();

















 // Does not yet work with server side rendering:
// const Home = React.lazy(() => import('./pages/Home'));
// const Page1 = React.lazy(() => import('./pages/Page-1'));
// const Page2 = React.lazy(() => import('./pages/Page-2'));

var App = function App() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (localStorage.jwtToken) {
      // Set auth token and get user info and export default
      Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_6__["default"])(localStorage.jwtToken); // Decode token and get user info and export default

      var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage.jwtToken); // Set user and isAuthenticated by call any action using bellow method

      Object(_utils_setData__WEBPACK_IMPORTED_MODULE_8__["default"])(dispatch, decoded); // Check for expired token

      var currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(Object(_store_auth_effects__WEBPACK_IMPORTED_MODULE_7__["logoutUser"])(function () {
          return history === null || history === void 0 ? void 0 : history.push('/');
        }));
      }
    }
  }, [dispatch, history]);
  return (
    /*#__PURE__*/
    // <Suspense fallback={<div>Loading</div>}>
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _App_module_css__WEBPACK_IMPORTED_MODULE_16___default.a.wrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_14__["GlobalStyle"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
      defaultTitle: "React SSR Starter \u2013 TypeScript Edition",
      titleTemplate: "%s \u2013 React SSR Starter \u2013 TypeScript Edition",
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: _shared_assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__["default"]
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_containers_HeaderContainer_HeaderContainer__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: _routes__WEBPACK_IMPORTED_MODULE_15__["default"].home,
      component: _pages_Home__WEBPACK_IMPORTED_MODULE_9__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: _routes__WEBPACK_IMPORTED_MODULE_15__["default"].login,
      component: _pages_Login_Login__WEBPACK_IMPORTED_MODULE_10__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: _routes__WEBPACK_IMPORTED_MODULE_15__["default"].register,
      component: _pages_Register_Register__WEBPACK_IMPORTED_MODULE_11__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      render: function render() {
        return '404!';
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], null)) // </Suspense>

  );
};

_s(App, "ttHHWC+EsJmhGbpqXwDwA2EruUw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/assets/favicon.png":
/*!***************************************!*\
  !*** ./src/shared/assets/favicon.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/favicon.d2e685d3.png");

/***/ }),

/***/ "./src/shared/assets/images/course-1-1.jpg":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/course-1-1.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/course-1-1.d65ab613.jpg");

/***/ }),

/***/ "./src/shared/assets/images/course-1-2.jpg":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/course-1-2.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/course-1-2.d65ab613.jpg");

/***/ }),

/***/ "./src/shared/assets/images/course-1-3.jpg":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/course-1-3.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/course-1-3.d65ab613.jpg");

/***/ }),

/***/ "./src/shared/assets/images/course-1-4.jpg":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/course-1-4.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/course-1-4.d65ab613.jpg");

/***/ }),

/***/ "./src/shared/assets/images/course-1-5.jpg":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/course-1-5.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/course-1-5.d65ab613.jpg");

/***/ }),

/***/ "./src/shared/assets/images/course-1-6.jpg":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/course-1-6.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/course-1-6.d65ab613.jpg");

/***/ }),

/***/ "./src/shared/assets/images/logo-directi.png":
/*!***************************************************!*\
  !*** ./src/shared/assets/images/logo-directi.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-directi.18dd051e.png");

/***/ }),

/***/ "./src/shared/assets/images/logo-gojek.png":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/logo-gojek.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-gojek.23eb1ffd.png");

/***/ }),

/***/ "./src/shared/assets/images/logo-make-my-trip.png":
/*!********************************************************!*\
  !*** ./src/shared/assets/images/logo-make-my-trip.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-make-my-trip.a2496fca.png");

/***/ }),

/***/ "./src/shared/assets/images/logo-microsoft.png":
/*!*****************************************************!*\
  !*** ./src/shared/assets/images/logo-microsoft.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-microsoft.cbde2802.png");

/***/ }),

/***/ "./src/shared/assets/images/logo-paytm.png":
/*!*************************************************!*\
  !*** ./src/shared/assets/images/logo-paytm.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-paytm.5b526b60.png");

/***/ }),

/***/ "./src/shared/assets/images/logo-swiggy.png":
/*!**************************************************!*\
  !*** ./src/shared/assets/images/logo-swiggy.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-swiggy.e9cca04e.png");

/***/ }),

/***/ "./src/shared/assets/images/logo-zomato.png":
/*!**************************************************!*\
  !*** ./src/shared/assets/images/logo-zomato.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/logo-zomato.b934be76.png");

/***/ }),

/***/ "./src/shared/assets/images/team-1-1.jpg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/team-1-1.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z");

/***/ }),

/***/ "./src/shared/assets/images/team-1-2.jpg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/team-1-2.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z");

/***/ }),

/***/ "./src/shared/assets/images/team-1-3.jpg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/team-1-3.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z");

/***/ }),

/***/ "./src/shared/assets/images/team-1-4.jpg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/team-1-4.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z");

/***/ }),

/***/ "./src/shared/assets/images/team-1-5.jpg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/team-1-5.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z");

/***/ }),

/***/ "./src/shared/assets/images/team-1-6.jpg":
/*!***********************************************!*\
  !*** ./src/shared/assets/images/team-1-6.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADOAM4DASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAMEAgUBB//EADIQAAICAgECAwUIAgMBAAAAAAABAgMREgQTITFBURQicYGRBSMyQmGhwdGx8CQzkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLy6bOROmtZ6OW7cPGfRGow/aXK6Eaq1Z0uq2nZjOqXjj9QMtk1wZcuvjyfTjUnjOdJN4Lezx4F/GnW5feS6dmZN7Nrx+px/xORwLuLw5bT12fZ5k0/Ns79ojz7+NCtS+7l1LMxa1aXh9QIXT4t3IvfKucXGTrqWX7uPPt+p6tKkuPBSmrJar3l4S/U85WUcOzl13we1s3KPut7p+S+eTZwYSo4FULe0ox758gJr7Q2hFKr7+VnTdW3g14vPpg12bqqfTWZ6vX4+R5MJuPLX2jKKVNkun4d0vBS/Y9W2xVVTsfhGLk/kB5d3GXE41V+0vbNo5ezezb7oouPHn28qybltCbrqxJrTC8V8yPF5fDc1yOTyFPkPwTi8Q/Rdiy5EeBbyq5qW05uyrEW98rwXzA4s5XW4XEVtjhG3LslnHaK7/U0fZ6pTsfFtUqHjEO/uv5kJcdcajg2XQco053WM65Xj8mW4rjfz7uTUn0XBR2xjZ+oG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJZfdB3zTr0qklq4vL91Pxz+voBrBD2qPU11nrtpvj3c+n17HS5Feyi21JzcEn6oCoIe0x1g4wnJzzrFJZaXn8P7EuVCNdc1GcupLVRS757/0wLghLlRi3mueIpbvCxDPr3/xknzOTpRfGEbHKMHmcfyvHYDWCPLk48O+UW01XJpry7CHIU2107Iy12SklmS/QCwJRvhPpa5fUWVjyX6nNvIhTfXGycIQlGTzJ47pr+2BcGaPId9s4ce2pqMYvbG3jtldmvRE1fyfYY35qlOxQ1jq0ls0u/fv4gbQY7OY8UOpJ7uO+35U5JfXL/Zmiuxzsui8YhPVf+U/5AoCV1kq1FQSc5y1jnw9f8JnzeyqqydzhJRjtmCa+PmBYGbqcivSdqr0k1FxinmOey7+ff4HFfMeL3aktHLTH5km19cr90BsBHi2WW0KVqip7Si1Hw7Nr+CwAAAAAAIx4tSustlCEpykmm4rK7JYz8iwAz+zS2x1Put+ppr3znPj6Z7nNnD3tssVjUpJa9vwvt3/ZfQ1ADNbw4WQqilBupax3hssfD5HUeOoxpScV05OWIxwnlNeHl4lwBkt4MLLpWYqzPG29ak/Ts/L9z7fxZ2K6MLtI2r3lrnvjHbv6YNQA4ur61FlWcbxcc+mUThVKE+rbZ1HGLSxDHbz+L7IuAM3Eq16lrTjvJuMX+WOf/r+ZZ15vhbn8MZRx8Wv6OwBwq8Xztz+KMY4+Df8AZNcfHFqp2/69O+PHVp/wXAEJcWv3tFq5TjOT8c4ln/fifOjdG2yVdtaU5bYlW3jsl6r0NAAlZTKxPNjTUlKDS/D2x8/P6iNc5QnG6cZqSxiMdVj6sqAM8ePY3FWXbwg00tcN48Mvz/Y+x4tfu7rZxnKcX4YzLP8AvwLgDiqvpQcc5zKUvq2/5OwAP//Z");

/***/ }),

/***/ "./src/shared/components/CourseOne/CourseOne.Styles.css":
/*!**************************************************************!*\
  !*** ./src/shared/components/CourseOne/CourseOne.Styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1612335941287
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/components/CourseOne/CourseOne.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/CourseOne/CourseOne.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CourseOne_Styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseOne.Styles.css */ "./src/shared/components/CourseOne/CourseOne.Styles.css");
/* harmony import */ var _CourseOne_Styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CourseOne_Styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_course_1_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/course-1-1.jpg */ "./src/shared/assets/images/course-1-1.jpg");
/* harmony import */ var _assets_images_course_1_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/course-1-2.jpg */ "./src/shared/assets/images/course-1-2.jpg");
/* harmony import */ var _assets_images_course_1_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/course-1-3.jpg */ "./src/shared/assets/images/course-1-3.jpg");
/* harmony import */ var _assets_images_course_1_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/course-1-4.jpg */ "./src/shared/assets/images/course-1-4.jpg");
/* harmony import */ var _assets_images_course_1_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/course-1-5.jpg */ "./src/shared/assets/images/course-1-5.jpg");
/* harmony import */ var _assets_images_course_1_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/course-1-6.jpg */ "./src/shared/assets/images/course-1-6.jpg");
/* harmony import */ var _assets_images_team_1_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/team-1-1.jpg */ "./src/shared/assets/images/team-1-1.jpg");
/* harmony import */ var _assets_images_team_1_2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/team-1-2.jpg */ "./src/shared/assets/images/team-1-2.jpg");
/* harmony import */ var _assets_images_team_1_3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/team-1-3.jpg */ "./src/shared/assets/images/team-1-3.jpg");
/* harmony import */ var _assets_images_team_1_4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/team-1-4.jpg */ "./src/shared/assets/images/team-1-4.jpg");
/* harmony import */ var _assets_images_team_1_5_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/team-1-5.jpg */ "./src/shared/assets/images/team-1-5.jpg");
/* harmony import */ var _assets_images_team_1_6_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/images/team-1-6.jpg */ "./src/shared/assets/images/team-1-6.jpg");

















var CourseOne = function CourseOne() {
  var params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'Poppins, sans-serif',
      marginTop: '6%',
      borderBottom: '1px solid #eee'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title__title"
  }, "Explore our ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "popular courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "course-one course-one__teacher-details home-one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, params, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_1_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_1_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Lou Guerrero")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "New react bootcamp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_2_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "It & Software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_2_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Cora Diaz")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Improve editing skills")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_3_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_3_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Ruth Becker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Marketing strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_4_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "Photography"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_4_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Ernest Rodriquez")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Basics of photography")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_5_jpg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_5_jpg__WEBPACK_IMPORTED_MODULE_14__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Isabella Stanley")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Affiliate bootcamp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_6_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "Health & Fitness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_6_jpg__WEBPACK_IMPORTED_MODULE_15__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Katherine Collins")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Healthy workout tips ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_1_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_1_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Lou Guerrero")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "New react bootcamp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_2_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "It & Software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_2_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Cora Diaz")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Improve editing skills")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__single color-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_course_1_3_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-heart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__category"
  }, "marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_team_1_3_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
    alt: ""
  }), "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/teacher-details"
  }, "Ruth Becker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "course-one__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "Marketing strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__stars"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__count"
  }, "4.8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "course-one__stars-count"
  }, "250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "course-one__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-clock"
  }), " 10 Hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-folder-open"
  }), " 6 Lectures"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/course-details"
  }, "$18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "course-one__link"
  }, "See Preview")))))))));
};

_c = CourseOne;
/* harmony default export */ __webpack_exports__["default"] = (CourseOne);

var _c;

$RefreshReg$(_c, "CourseOne");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Footer/Footer.Styles.ts":
/*!*******************************************************!*\
  !*** ./src/shared/components/Footer/Footer.Styles.ts ***!
  \*******************************************************/
/*! exports provided: FooterStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStyles", function() { return FooterStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Poppins', sans-serif;\n    padding: 2rem 0;\n    text-align: center;\n    color: #999;\n    font-size: 0.8rem;\n    margin-top: 2.5rem;\n    background-color: white;\n    .heart {\n        color: #ff7870;\n    }\n    a {\n        color: #ff7870;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer(_templateObject());

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Footer/Footer.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Footer/Footer.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollTopArrow_ScrollTopArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScrollTopArrow/ScrollTopArrow */ "./src/shared/components/ScrollTopArrow/ScrollTopArrow.tsx");
/* harmony import */ var _Footer_Styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.Styles */ "./src/shared/components/Footer/Footer.Styles.ts");




var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Footer_Styles__WEBPACK_IMPORTED_MODULE_2__["FooterStyles"], {
    style: {
      marginTop: '20%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container"
  }, "Development by", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "https://www.github.com/quoctrung163",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "quoctrung163"), ' ', "with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "fa fa-heart heart"
  }), " \xA9\xA0", new Date().getFullYear())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ScrollTopArrow_ScrollTopArrow__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Header/Header.Styles.ts":
/*!*******************************************************!*\
  !*** ./src/shared/components/Header/Header.Styles.ts ***!
  \*******************************************************/
/*! exports provided: HeaderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStyles", function() { return HeaderStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 2.5rem 0;\n    text-align: center;\n    background-color: white;\n    .love {\n        position: fixed;\n        right: 3rem;\n        bottom: 3rem;\n        z-index: 99;\n        display: flex;\n        flex-flow: column nowrap;\n        align-items: center;\n        &-count {\n            color: #999;\n            display: inline-block;\n            margin-bottom: 5px;\n            font-size: 14px;\n        }\n        &-icon {\n            position: relative;\n            width: 50px;\n            height: 50px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50px;\n            cursor: pointer;\n            color: rgb(226, 45, 72);\n            background-color: white;\n            box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);\n            i {\n                pointer-events: none;\n            }\n            &.active {\n                animation: clicked 0.05s forwards alternate 1 linear;\n            }\n        }\n        &-heart {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            &.active {\n                animation: loveFly 0.25s forwards 1 linear;\n            }\n        }\n    }\n    @keyframes loveFly {\n        to {\n            transform: translate(-50%, -10rem);\n            opacity: 0;\n        }\n    }\n    @keyframes clicked {\n        from {\n            transform: scale(1) translateY(0);\n        }\n        to {\n            transform: scale(0.9) translateY(5px);\n        }\n    }\n    .logo {\n        max-width: 75px;\n        margin: 0 auto 20px;\n    }\n    .heading {\n        text-transform: uppercase;\n        font-weight: bold;\n        font-size: 40px;\n        color: #5e6b79;\n        letter-spacing: 2.5px;\n        font-family: 'Poppins', sans-serif;\n    }\n    .heading strong {\n        font-weight: 800;\n        color: transparent;\n        -webkit-background-clip: text;\n        background-clip: text;\n        background-image: linear-gradient(to right, #1abcf4, #5defb8);\n    }\n    .slogan {\n        font-family: 'Poppins', sans-serif;\n        font-size: 14px;\n        line-height: 1.6;\n        max-width: 40rem;\n        margin: 1rem auto 0;\n        color: #999;\n    }\n    .contact-me {\n        display: inline-block;\n        padding: 1.5rem 3rem;\n        border-radius: 4px;\n        color: white;\n        text-transform: uppercase;\n        font-size: 14px;\n        background-color: #001940;\n        margin-top: 3rem;\n        font-weight: 600;\n        background-image: linear-gradient(to right, #784ba0, #2b86c5);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header(_templateObject());

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Header/Header.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_Filter_Styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Filter.Styles */ "./src/shared/styles/Filter.Styles.ts");
/* harmony import */ var _Header_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.Styles */ "./src/shared/components/Header/Header.Styles.ts");





var Header = function Header(_ref) {
  var _auth$users;

  var logout = _ref.logout,
      auth = _ref.auth,
      classNameHome = _ref.classNameHome,
      classNameDashboard = _ref.classNameDashboard,
      classNameUsers = _ref.classNameUsers,
      classNameCourse = _ref.classNameCourse,
      classNameCategory = _ref.classNameCategory,
      classNameEnroll = _ref.classNameEnroll,
      classMyCourses = _ref.classMyCourses,
      classAddCourse = _ref.classAddCourse,
      classAddLecture = _ref.classAddLecture,
      classAllCourses = _ref.classAllCourses,
      classProfile = _ref.classProfile,
      classAllProfile = _ref.classAllProfile,
      classNameLogin = _ref.classNameLogin,
      classNameInstructor = _ref.classNameInstructor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Styles__WEBPACK_IMPORTED_MODULE_3__["HeaderStyles"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading"
  }, "Snack", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Dev")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "slogan"
  }, "Share all knowledge we have with \uD83D\uDE18"))), (auth === null || auth === void 0 ? void 0 : (_auth$users = auth.users) === null || _auth$users === void 0 ? void 0 : _auth$users.role) === 'admin' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Filter_Styles__WEBPACK_IMPORTED_MODULE_2__["FilterStyles"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameHome
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameDashboard
  }, "DashBoard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/allusers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameUsers
  }, "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/ShowCourseList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameCourse
  }, "Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/ShowCategoryList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameCategory
  }, "Categories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/EnrollmentList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameEnroll
  }, "Enrolled Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "",
    onClick: logout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "filter-item"
  }, "Logout"))) : auth.users.role === 'instructor' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Filter_Styles__WEBPACK_IMPORTED_MODULE_2__["FilterStyles"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameHome
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/services/".concat(auth.users.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classMyCourses
  }, "My Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/addcourse/".concat(auth.users.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classAddCourse
  }, "Add Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/add-lecture/".concat(auth.users.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classAddLecture
  }, "Add Lecture")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classAllCourses
  }, "All Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/finaldashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classProfile
  }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/finalprofiles"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classAllProfile
  }, "All Profiles")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "",
    onClick: logout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "filter-item"
  }, "Logout"))) : auth.users.role === 'student' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Filter_Styles__WEBPACK_IMPORTED_MODULE_2__["FilterStyles"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameHome
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/servicesforstudent/".concat(auth.users.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classMyCourses
  }, "My Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classAllCourses
  }, "All Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "",
    onClick: logout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "filter-item"
  }, "Logout"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Filter_Styles__WEBPACK_IMPORTED_MODULE_2__["FilterStyles"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameHome
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login/student"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameLogin
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/register/instructor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNameInstructor
  }, "Teach On SnackDev"))));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Introduction/Introduction.Styles.css":
/*!********************************************************************!*\
  !*** ./src/shared/components/Introduction/Introduction.Styles.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1612335941078
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/components/Introduction/Introduction.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/components/Introduction/Introduction.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Introduction_Styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Introduction.Styles.css */ "./src/shared/components/Introduction/Introduction.Styles.css");
/* harmony import */ var _Introduction_Styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Introduction_Styles_css__WEBPACK_IMPORTED_MODULE_3__);
var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Introduction = function Introduction() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      startCounter = _useState2[0],
      setStartCounter = _useState2[1];

  var onVisibilityChange = function onVisibilityChange(isVisible) {
    if (isVisible) {
      setStartCounter(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "about-two"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-title text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title__title"
  }, "Welcome to online ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "learning center")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-two__text"
  }, "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which dont look."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-graduation-cap"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-two__single-text"
  }, "Start learning from our experts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fad fa-lightbulb-on"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__single-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-two__single-text"
  }, "Enhance your skills with us now")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#none",
    className: "thm-btn"
  }, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 d-flex justify-content-xl-end justify-content-sm-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "about-two__image-dots"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      borderRadius: '100% !important'
    },
    src: "https://picsum.photos/1000/1000",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-two__count-text"
  }, "Trusted by", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "counter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: onVisibilityChange,
    offset: {
      top: 10
    },
    delayedCall: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    end: startCounter ? 4890 : 0
  }))))))))));
};

_s2(Introduction, "M3sl65rPLbbjARJrk12D9NVZfWs=");

_c = Introduction;
/* harmony default export */ __webpack_exports__["default"] = (Introduction);

var _c;

$RefreshReg$(_c, "Introduction");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Login/Login.tsx":
/*!***********************************************!*\
  !*** ./src/shared/components/Login/Login.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _styles_LinkCustom_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/LinkCustom.Styles */ "./src/shared/styles/LinkCustom.Styles.ts");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form_Styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Form.Styles.css */ "./src/shared/styles/Form.Styles.css");
/* harmony import */ var _styles_Form_Styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_Styles_css__WEBPACK_IMPORTED_MODULE_5__);







var Login = function Login(_ref) {
  var roleParams = _ref.roleParams,
      clickSubmit = _ref.clickSubmit,
      handleChange = _ref.handleChange,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signup-signin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://imgur.com/aILP3CD.png",
    alt: "login",
    className: "signup-signin-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signup-signin-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LinkCustom_Styles__WEBPACK_IMPORTED_MODULE_3__["LinkCustom"], {
    to: "/register/".concat(roleParams)
  }, "Sign up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-item is-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LinkCustom_Styles__WEBPACK_IMPORTED_MODULE_3__["LinkCustomActive"], {
    to: "/login/".concat(roleParams)
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "signup-signin-heading"
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "post",
    className: "signup-signin-form",
    autoComplete: "off",
    onSubmit: clickSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    className: "form-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    id: "email",
    className: "form-input",
    placeholder: "Ex: johndoe@email.com",
    value: values.email,
    onChange: handleChange('email'),
    required: true,
    name: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "password",
    className: "form-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    id: "password",
    className: "form-input",
    placeholder: "************",
    value: values.password,
    onChange: handleChange('password'),
    required: true,
    name: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group signup-signin-term"
  }, "Don\u2019t have an account?", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "signup-signin-term-link",
    to: "/register/student"
  }, "Sign up (student)"), ' / ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "signup-signin-term-link",
    to: "/register/instructor"
  }, "Sign up (instructor)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn--gradient"
  }, "Sign in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], null)));
};

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Partners/Partners.Styles.css":
/*!************************************************************!*\
  !*** ./src/shared/components/Partners/Partners.Styles.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1612335941492
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/components/Partners/Partners.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Partners/Partners.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Partners_Styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partners.Styles.css */ "./src/shared/components/Partners/Partners.Styles.css");
/* harmony import */ var _Partners_Styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Partners_Styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_logo_directi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/logo-directi.png */ "./src/shared/assets/images/logo-directi.png");
/* harmony import */ var _assets_images_logo_gojek_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/logo-gojek.png */ "./src/shared/assets/images/logo-gojek.png");
/* harmony import */ var _assets_images_logo_make_my_trip_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/logo-make-my-trip.png */ "./src/shared/assets/images/logo-make-my-trip.png");
/* harmony import */ var _assets_images_logo_microsoft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/logo-microsoft.png */ "./src/shared/assets/images/logo-microsoft.png");
/* harmony import */ var _assets_images_logo_paytm_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/logo-paytm.png */ "./src/shared/assets/images/logo-paytm.png");
/* harmony import */ var _assets_images_logo_swiggy_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/logo-swiggy.png */ "./src/shared/assets/images/logo-swiggy.png");
/* harmony import */ var _assets_images_logo_zomato_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/logo-zomato.png */ "./src/shared/assets/images/logo-zomato.png");











var Partners = function Partners() {
  var params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "brand-two"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title__title"
  }, "Our students work at")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "brand-one__carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, params, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_directi_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_gojek_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_make_my_trip_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_microsoft_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_paytm_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_swiggy_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_zomato_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: ""
  }))))));
};

_c = Partners;
/* harmony default export */ __webpack_exports__["default"] = (Partners);

var _c;

$RefreshReg$(_c, "Partners");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/Register/Register.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Register/Register.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _styles_LinkCustom_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/LinkCustom.Styles */ "./src/shared/styles/LinkCustom.Styles.ts");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form_Styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Form.Styles.css */ "./src/shared/styles/Form.Styles.css");
/* harmony import */ var _styles_Form_Styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_Styles_css__WEBPACK_IMPORTED_MODULE_5__);







var Register = function Register(_ref) {
  var roleParams = _ref.roleParams,
      capitalizeFirstLetter = _ref.capitalizeFirstLetter,
      clickSubmit = _ref.clickSubmit,
      handleChange = _ref.handleChange,
      values = _ref.values;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signup-signin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://imgur.com/aILP3CD.png",
    alt: "login",
    className: "signup-signin-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signup-signin-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-item is-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LinkCustom_Styles__WEBPACK_IMPORTED_MODULE_3__["LinkCustomActive"], {
    to: "/register/".concat(roleParams)
  }, "Sign up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LinkCustom_Styles__WEBPACK_IMPORTED_MODULE_3__["LinkCustom"], {
    to: "/login/".concat(roleParams)
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "signup-signin-heading"
  }, "Sign up ", "(for ".concat(roleParams ? "".concat(capitalizeFirstLetter(roleParams)) : '', ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "post",
    className: "signup-signin-form",
    autoComplete: "off",
    onSubmit: clickSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "firstName",
    className: "form-label"
  }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "firstName",
    className: "form-input",
    placeholder: "Ex: Trung",
    value: values.first_name,
    onChange: handleChange('first_name'),
    required: true,
    name: "firstName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "lastName",
    className: "form-label"
  }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "lastName",
    className: "form-input",
    placeholder: "Ex: Phan",
    value: values.last_name,
    onChange: handleChange('last_name'),
    required: true,
    name: "lastName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    className: "form-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    id: "email",
    className: "form-input",
    placeholder: "Ex: trungphan@email.com",
    value: values.email,
    onChange: handleChange('email'),
    required: true,
    name: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "password",
    className: "form-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    id: "password",
    className: "form-input",
    placeholder: "************",
    value: values.password,
    onChange: handleChange('password'),
    required: true,
    name: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "re-password",
    className: "form-label"
  }, "Repeat password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    id: "re-password",
    className: "form-input",
    placeholder: "************",
    value: values.password2,
    onChange: handleChange('password2'),
    required: true,
    name: "re-password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group signup-signin-term"
  }, "Already have an account?", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "signup-signin-term-link",
    to: "/login/".concat(roleParams)
  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn--gradient"
  }, "Sign up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], null)));
};

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/components/ScrollTopArrow/ScrollTopArrow.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/ScrollTopArrow/ScrollTopArrow.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ScrollTopArrow = function ScrollTopArrow() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showScroll = _useState2[0],
      setShowScroll = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  var checkScrollTop = function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    }

    if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  var scrollTop = function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "back-to-top",
    onClick: scrollTop,
    style: {
      display: showScroll ? 'flex' : 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fal fa-arrow-up"
  }));
};

_s2(ScrollTopArrow, "PfkPbRUmWGfJg95Mr7aaJLsda20=");

_c = ScrollTopArrow;
/* harmony default export */ __webpack_exports__["default"] = (ScrollTopArrow);

var _c;

$RefreshReg$(_c, "ScrollTopArrow");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/containers/HeaderContainer/HeaderContainer.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/containers/HeaderContainer/HeaderContainer.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/auth/selectors */ "./src/shared/store/auth/selectors.ts");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth/effects */ "./src/shared/store/auth/effects.ts");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/shared/components/Header/Header.tsx");
var _s = $RefreshSig$();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var HeaderContainer = function HeaderContainer() {
  _s();

  var _location$pathname, _location$pathname2, _location$pathname3, _location$pathname4, _location$pathname5;

  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getAuth"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var checkHomeRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/';
  var checkLoginRoute = location === null || location === void 0 ? void 0 : (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.includes('login');
  var checkInstructorRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/register/instructor';
  var checkDashboardRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/dashboard';
  var checkUsersRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/allusers';
  var checkCourseRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/ShowCourseList';
  var checkCategoryRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/ShowCategoryList';
  var checkEnrollRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/EnrollmentList';
  var checkMyCoursesRoute = (location === null || location === void 0 ? void 0 : (_location$pathname2 = location.pathname) === null || _location$pathname2 === void 0 ? void 0 : _location$pathname2.includes("/services/".concat(auth.users.id))) || (location === null || location === void 0 ? void 0 : (_location$pathname3 = location.pathname) === null || _location$pathname3 === void 0 ? void 0 : _location$pathname3.includes('/servicesforstudent/'));
  var CheckAddcourseRoute = location === null || location === void 0 ? void 0 : (_location$pathname4 = location.pathname) === null || _location$pathname4 === void 0 ? void 0 : _location$pathname4.includes('addcourse');
  var checkAddLectureRoute = location === null || location === void 0 ? void 0 : (_location$pathname5 = location.pathname) === null || _location$pathname5 === void 0 ? void 0 : _location$pathname5.includes('add-lecture');
  var checkAllCoursesRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/services';
  var checkProfileRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/finaldashboard';
  var checkAllProfileRoute = (location === null || location === void 0 ? void 0 : location.pathname) === '/finalprofiles';
  var allClass = {
    classNameHome: "filter-item ".concat(checkHomeRoute ? 'active' : ''),
    classNameInstructor: "filter-item ".concat(checkInstructorRoute ? 'active' : ''),
    classNameLogin: "filter-item ".concat(checkLoginRoute ? 'active' : ''),
    classNameDashboard: "filter-item ".concat(checkDashboardRoute ? 'active' : ''),
    classNameUsers: "filter-item ".concat(checkUsersRoute ? 'active' : ''),
    classNameCourse: "filter-item ".concat(checkCourseRoute ? 'active' : ''),
    classNameCategory: "filter-item ".concat(checkCategoryRoute ? 'active' : ''),
    classNameEnroll: "filter-item ".concat(checkEnrollRoute ? 'active' : ''),
    classMyCourses: "filter-item ".concat(checkMyCoursesRoute ? 'active' : ''),
    classAddCourse: "filter-item ".concat(CheckAddcourseRoute ? 'active' : ''),
    classAddLecture: "filter-item ".concat(checkAddLectureRoute ? 'active' : ''),
    classAllCourses: "filter-item ".concat(checkAllCoursesRoute ? 'active' : ''),
    classProfile: "filter-item ".concat(checkProfileRoute ? 'active' : ''),
    classAllProfile: "filter-item ".concat(checkAllProfileRoute ? 'active' : '')
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem('userid', JSON.stringify(auth.users.id));
    localStorage.setItem('userRole', JSON.stringify(auth.users.role));
  }

  var logoutClick = function logoutClick(e) {
    e.preventDefault();
    dispatch(Object(_store_auth_effects__WEBPACK_IMPORTED_MODULE_4__["logoutUser"])(function () {
      return history === null || history === void 0 ? void 0 : history.push('/');
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    logout: logoutClick,
    auth: auth
  }, allClass));
};

_s(HeaderContainer, "sk8a3WRLaGUgoPryxPfBerHZwNA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"]];
});

_c = HeaderContainer;
/* harmony default export */ __webpack_exports__["default"] = (HeaderContainer);

var _c;

$RefreshReg$(_c, "HeaderContainer");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/i18n/IntlProvider.tsx":
/*!******************************************!*\
  !*** ./src/shared/i18n/IntlProvider.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-xhr-backend */ "./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/app/selectors */ "./src/shared/store/app/selectors.ts");
/* harmony import */ var _locales_de_DE_translation_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/de_DE/translation.json */ "./src/shared/i18n/locales/de_DE/translation.json");
var _locales_de_DE_translation_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locales/de_DE/translation.json */ "./src/shared/i18n/locales/de_DE/translation.json", 1);
/* harmony import */ var _locales_en_US_translation_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales/en_US/translation.json */ "./src/shared/i18n/locales/en_US/translation.json");
var _locales_en_US_translation_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locales/en_US/translation.json */ "./src/shared/i18n/locales/en_US/translation.json", 1);
var _s = $RefreshSig$();










if (true) {
  i18next__WEBPACK_IMPORTED_MODULE_1__["default"].use(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2__["default"]);
} // i18next.use(__BROWSER__ ? i18nextXHRBackend : {}).init({


i18next__WEBPACK_IMPORTED_MODULE_1__["default"].init({
  backend: {
    // for all available options read the backend's repository readme file
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  react: {
    // Must be false until Suspense is supported on the server side
    useSuspense: false,
    wait: true
  },
  debug:  true && true,
  fallbackLng: 'en_US',
  fallbackNS: ['translation'],
  // This option is necessary to tell i18next to try loading missing resources via
  // i18next-xhr-backend, otherwise no calls will be made if resources are defined.
  partialBundledLanguages: true,
  resources: {
    de_DE: {
      translation: _locales_de_DE_translation_json__WEBPACK_IMPORTED_MODULE_6__
    },
    en_US: {
      translation: _locales_en_US_translation_json__WEBPACK_IMPORTED_MODULE_7__
    }
  },
  parseMissingKeyHandler: function parseMissingKeyHandler(missing) {
    if (true) {
      console.warn('MISSING TRANSLATION:', missing);
    }

    return missing;
  }
});
i18next__WEBPACK_IMPORTED_MODULE_1__["default"].languages = ['de_DE', 'en_US'];

var I18N = function I18N(_ref) {
  _s();

  var children = _ref.children;
  var locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_app_selectors__WEBPACK_IMPORTED_MODULE_5__["getLocale"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    i18next__WEBPACK_IMPORTED_MODULE_1__["default"].changeLanguage(locale);
  }, [locale]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_3__["I18nextProvider"], {
    i18n: i18next__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, children);
};

_s(I18N, "DAklLMknmW6AM7lD1ET+HET3fME=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = I18N;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(I18N));

var _c, _c2;

$RefreshReg$(_c, "I18N");
$RefreshReg$(_c2, "%default%");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/i18n/locales/de_DE/translation.json":
/*!********************************************************!*\
  !*** ./src/shared/i18n/locales/de_DE/translation.json ***!
  \********************************************************/
/*! exports provided: features, i18n-example, i18n-support, router-headline, nav, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"features\":\"Funktionen\",\"i18n-example\":\"i18n Beispiel\",\"i18n-support\":\"i18n Unterstützung (durch React i18Next)\",\"router-headline\":\"Router Beispiel\",\"nav\":{\"home\":\"Startseite\",\"page-1\":\"Beispiel Seite 1\",\"page-2\":\"Beispiel Seite 2\"}}");

/***/ }),

/***/ "./src/shared/i18n/locales/en_US/translation.json":
/*!********************************************************!*\
  !*** ./src/shared/i18n/locales/en_US/translation.json ***!
  \********************************************************/
/*! exports provided: nav, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"nav\":{\"home\":\"Home\",\"login\":\"Login\",\"teachOnSnackDev\":\"Teach On SnackDev\"}}");

/***/ }),

/***/ "./src/shared/pages/Home/index.tsx":
/*!*****************************************!*\
  !*** ./src/shared/pages/Home/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var store_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/app/actions */ "./src/shared/store/app/actions.ts");
/* harmony import */ var _components_Introduction_Introduction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Introduction/Introduction */ "./src/shared/components/Introduction/Introduction.tsx");
/* harmony import */ var _components_Partners_Partners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Partners/Partners */ "./src/shared/components/Partners/Partners.tsx");
/* harmony import */ var _components_CourseOne_CourseOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CourseOne/CourseOne */ "./src/shared/components/CourseOne/CourseOne.tsx");
var _s = $RefreshSig$();









var App = function App() {
  _s();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var handleLocaleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    dispatch(Object(store_app_actions__WEBPACK_IMPORTED_MODULE_3__["setLocale"])(e.currentTarget.value));
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Introduction_Introduction__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseOne_CourseOne__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Partners_Partners__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

_s(App, "IQ44XMOaR574xjEJBr6EmxDlcj4=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/pages/Login/Login.tsx":
/*!******************************************!*\
  !*** ./src/shared/pages/Login/Login.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth/effects */ "./src/shared/store/auth/effects.ts");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Login/Login */ "./src/shared/components/Login/Login.tsx");
/* harmony import */ var _styles_CenterComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/CenterComponent */ "./src/shared/styles/CenterComponent.ts");
var _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Login = function Login(_ref) {
  _s2();

  var match = _ref.match;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var roleParams = match.params.role;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    password: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleChange = function handleChange(name) {
    return function (event) {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, event.target.value)));
    };
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    var user = {
      email: values.email,
      password: values.password
    };
    dispatch(Object(_store_auth_effects__WEBPACK_IMPORTED_MODULE_4__["loginUser"])(user, function (err) {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])(err);
    }, function () {
      return setValues({
        email: '',
        password: ''
      });
    }, function () {
      return history.push('/');
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CenterComponent__WEBPACK_IMPORTED_MODULE_6__["CenterComponent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
    roleParams: roleParams,
    clickSubmit: clickSubmit,
    handleChange: handleChange,
    values: values
  }));
};

_s2(Login, "3pdMke4WF6fw5sWNfTIL5Tu6Dm4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/pages/Register/Register.tsx":
/*!************************************************!*\
  !*** ./src/shared/pages/Register/Register.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth/effects */ "./src/shared/store/auth/effects.ts");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Register/Register */ "./src/shared/components/Register/Register.tsx");
/* harmony import */ var _styles_CenterComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/CenterComponent */ "./src/shared/styles/CenterComponent.ts");
var _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Register = function Register(_ref) {
  _s2();

  var match = _ref.match;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var roleParams = match.params.role;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleChange = function handleChange(name) {
    return function (event) {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, event.target.value)));
    };
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    var user = {
      first_name: values.first_name || '',
      last_name: values.last_name || '',
      email: values.email || '',
      password: values.password || '',
      password2: values.password2 || '',
      role: roleParams || ''
    };
    dispatch(Object(_store_auth_effects__WEBPACK_IMPORTED_MODULE_4__["registerUser"])(JSON.stringify(user), function (message) {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])(message);
    }, function (err) {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])(err);
    }, function () {
      return setValues({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
      });
    }, function () {
      return history.push("/login/".concat(roleParams));
    }));
  };

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CenterComponent__WEBPACK_IMPORTED_MODULE_6__["CenterComponent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Register_Register__WEBPACK_IMPORTED_MODULE_5__["default"], {
    roleParams: roleParams,
    capitalizeFirstLetter: capitalizeFirstLetter,
    clickSubmit: clickSubmit,
    handleChange: handleChange,
    values: values
  }));
};

_s2(Register, "h7JLx82d6Q+CHaa/gZ4G0O21TLc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/routes.ts":
/*!******************************!*\
  !*** ./src/shared/routes.ts ***!
  \******************************/
/*! exports provided: getRoute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoute", function() { return getRoute; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable security/detect-object-injection */
var routes = {
  home: '/',
  login: '/login/:role',
  register: '/register/:role'
};
var getRoute = function getRoute(path, params) {
  var routesConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : routes;
  return path.split('.').reduce(function (routeBranch, pathItem) {
    if (routeBranch && routeBranch[pathItem]) {
      var route = routeBranch[pathItem];

      if (typeof route === 'string') {
        if (!params || typeof params === 'undefined') {
          return route;
        }

        return Object.entries(params).reduce(function (replaced, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return replaced.replace(":".concat(key), String(value));
        }, route);
      }

      return routeBranch[pathItem];
    }
  }, routesConfig);
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/app/actions.ts":
/*!*****************************************!*\
  !*** ./src/shared/store/app/actions.ts ***!
  \*****************************************/
/*! exports provided: ActionTypes, setLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return setLocale; });
var ActionTypes = {
  SETLOCALE: 'app/set-locale'
};
var setLocale = function setLocale(locale) {
  return {
    type: ActionTypes.SETLOCALE,
    payload: locale
  };
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/app/reducer.ts":
/*!*****************************************!*\
  !*** ./src/shared/store/app/reducer.ts ***!
  \*****************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/shared/store/app/actions.ts");


var initialState = Object.freeze({
  locale: 'en_US'
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, function (draft) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SETLOCALE:
        {
          draft.locale = action.payload;
          return;
        }
    }
  });
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/app/selectors.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/app/selectors.ts ***!
  \*******************************************/
/*! exports provided: app, getLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* eslint-disable import/prefer-default-export */

var app = function app(state) {
  return state.app;
};
var getLocale = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([app], function (app) {
  return app.locale;
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/auth/action.ts":
/*!*****************************************!*\
  !*** ./src/shared/store/auth/action.ts ***!
  \*****************************************/
/*! exports provided: ActionTypes, setCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
var ActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};
var setCurrentUser = function setCurrentUser(auth) {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: auth
  };
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/auth/effects.ts":
/*!******************************************!*\
  !*** ./src/shared/store/auth/effects.ts ***!
  \******************************************/
/*! exports provided: dispatchSetCurrentUser, registerUser, loginUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchSetCurrentUser", function() { return dispatchSetCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/setAuthToken */ "./src/shared/utils/setAuthToken.ts");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/action */ "./src/shared/store/auth/action.ts");
/* harmony import */ var _utils_setData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/setData */ "./src/shared/utils/setData.ts");
/* harmony import */ var _utils_clearData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/clearData */ "./src/shared/utils/clearData.ts");






var dispatchSetCurrentUser = function dispatchSetCurrentUser(data) {
  return function (dispatch) {
    dispatch(Object(_auth_action__WEBPACK_IMPORTED_MODULE_3__["setCurrentUser"])(data));
  };
};
var registerUser = function registerUser(data, doneCb, errorCb, clearInput, redirectWhenSuccess) {
  return function (_dispatch) {
    // eslint-disable-next-line prefer-const
    var config = {
      method: 'post',
      url: '/users/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function () {
      clearInput();
      doneCb('Register successfully! Thank You <3');
      redirectWhenSuccess();
    }).catch(function (err) {
      clearInput();
      errorCb(err.response.data.first_name || err.response.data.last_name || err.response.data.email || err.response.data.password || err.response.data.password2);
    });
  };
};
var loginUser = function loginUser(data, errorCb, clearInput, redirectWhenSuccess) {
  return function (dispatch) {
    // eslint-disable-next-line prefer-const
    var config = {
      method: 'post',
      url: '/users/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (res) {
      return res.data;
    }).then(function (data) {
      var token = data.token;
      localStorage.setItem('jwtToken', token);
      Object(utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token); // Decode token to get user data

      var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token); // Set current user

      Object(_utils_setData__WEBPACK_IMPORTED_MODULE_4__["default"])(dispatch, decoded);
      clearInput();
      redirectWhenSuccess();
    }).catch(function (err) {
      clearInput();
      errorCb(err.response.data.email || err.response.data.password);
    });
  };
};
var logoutUser = function logoutUser(redirectWhenSuccess) {
  return function (dispatch) {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken'); // Remove auth header from future requests

    Object(utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(false); // Set current user to {} which will

    Object(_utils_clearData__WEBPACK_IMPORTED_MODULE_5__["default"])(dispatch, {});
    redirectWhenSuccess();
  };
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/auth/reducer.ts":
/*!******************************************!*\
  !*** ./src/shared/store/auth/reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var validation_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validation/isEmpty */ "./src/shared/validation/isEmpty.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/shared/store/auth/action.ts");



var initialState = Object.freeze({
  auth: {
    isAuthenticated: false,
    users: {}
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, function (draft) {
    switch (action.type) {
      case _action__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].SET_CURRENT_USER:
        {
          draft.auth.isAuthenticated = !Object(validation_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(action.payload);
          draft.auth.users = action.payload;
          return;
        }

      default:
        {
          return state;
        }
    }
  });
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/auth/selectors.ts":
/*!********************************************!*\
  !*** ./src/shared/store/auth/selectors.ts ***!
  \********************************************/
/*! exports provided: auth, getAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var auth = function auth(state) {
  return state.auth;
};
var getAuth = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([auth], function (auth) {
  return auth.auth;
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/errors/action.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/errors/action.ts ***!
  \*******************************************/
/*! exports provided: ErrorsTypes, getErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsTypes", function() { return ErrorsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
var ErrorsTypes = {
  GET_ERRORS: 'GET_ERRORS'
};
var getErrors = function getErrors(errors) {
  return {
    type: ErrorsTypes.GET_ERRORS,
    payload: errors
  };
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/errors/reducer.ts":
/*!********************************************!*\
  !*** ./src/shared/store/errors/reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/shared/store/errors/action.ts");


var initialState = Object.freeze({
  errors: {}
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, function (draft) {
    switch (action.type) {
      case _action__WEBPACK_IMPORTED_MODULE_1__["ErrorsTypes"].GET_ERRORS:
        return action.payload;

      default:
        return state;
    }
  });
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/history.ts":
/*!*************************************!*\
  !*** ./src/shared/store/history.ts ***!
  \*************************************/
/*! exports provided: createUniversalHistory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUniversalHistory", function() { return createUniversalHistory; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

var createUniversalHistory = function createUniversalHistory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$initialEntries = _ref.initialEntries,
      initialEntries = _ref$initialEntries === void 0 ? [] : _ref$initialEntries;

  if (true) {
    var history = window.browserHistory || Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();

    if ( true && !window.browserHistory) {
      window.browserHistory = history;
    }

    return history;
  }

  return Object(history__WEBPACK_IMPORTED_MODULE_0__["createMemoryHistory"])({
    initialEntries: initialEntries
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createUniversalHistory);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/index.ts":
/*!***********************************!*\
  !*** ./src/shared/store/index.ts ***!
  \***********************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/shared/store/rootReducer.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var configureStore = function configureStore(_ref) {
  var _ref2;

  var initialState = _ref.initialState,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? [] : _ref$middleware;

  var devtools = typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionsBlacklist: []
  });

  var composeEnhancers = devtools || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(Object(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(), initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, _toConsumableArray((_ref2 = [redux_thunk__WEBPACK_IMPORTED_MODULE_0__["default"]]).concat.apply(_ref2, _toConsumableArray(middleware))))));

  if (true) {
    if (true) {
      module.hot.accept(/*! ./rootReducer */ "./src/shared/store/rootReducer.ts", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/shared/store/rootReducer.ts");
(function () {
        return store.replaceReducer(__webpack_require__(/*! ./rootReducer */ "./src/shared/store/rootReducer.ts").default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
    }
  }

  return store;
};
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/profile/action.ts":
/*!********************************************!*\
  !*** ./src/shared/store/profile/action.ts ***!
  \********************************************/
/*! exports provided: ActionTypes, getProfile, getProfiles, setProfileLoading, clearCurrentProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfiles", function() { return getProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfileLoading", function() { return setProfileLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCurrentProfile", function() { return clearCurrentProfile; });
var ActionTypes = {
  GET_PROFILE: 'GET_PROFILE',
  GET_PROFILES: 'GET_PROFILES',
  PROFILE_LOADING: 'PROFILE_LOADING',
  CLEAR_CURRENT_PROFILE: 'CLEAR_CURRENT_PROFILE'
};
var getProfile = function getProfile(profile) {
  return {
    type: ActionTypes.GET_PROFILE,
    payload: profile
  };
};
var getProfiles = function getProfiles(profiles) {
  return {
    type: ActionTypes.GET_PROFILES,
    payload: profiles
  };
};
var setProfileLoading = function setProfileLoading() {
  return {
    type: ActionTypes.PROFILE_LOADING
  };
};
var clearCurrentProfile = function clearCurrentProfile() {
  return {
    type: ActionTypes.CLEAR_CURRENT_PROFILE
  };
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/profile/effects.ts":
/*!*********************************************!*\
  !*** ./src/shared/store/profile/effects.ts ***!
  \*********************************************/
/*! exports provided: errorResponse, getCurrentProfile, createProfile, addExperience, addEducation, deleteExperience, deleteEducation, getAllProfiles, deleteAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorResponse", function() { return errorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProfile", function() { return getCurrentProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExperience", function() { return addExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEducation", function() { return addEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExperience", function() { return deleteExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEducation", function() { return deleteEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProfiles", function() { return getAllProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return deleteAccount; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var store_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/auth/action */ "./src/shared/store/auth/action.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/shared/store/profile/action.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var errorResponse = function errorResponse(errData) {
  var errRes = (errData === null || errData === void 0 ? void 0 : errData.handle) || (errData === null || errData === void 0 ? void 0 : errData.status) || (errData === null || errData === void 0 ? void 0 : errData.skills) || (errData === null || errData === void 0 ? void 0 : errData.website) || (errData === null || errData === void 0 ? void 0 : errData.youtube) || (errData === null || errData === void 0 ? void 0 : errData.twitter) || (errData === null || errData === void 0 ? void 0 : errData.facebook) || (errData === null || errData === void 0 ? void 0 : errData.linkedin) || (errData === null || errData === void 0 ? void 0 : errData.instagram) || '';
  return errRes;
};
var getCurrentProfile = function getCurrentProfile() {
  return function (dispatch) {
    dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["setProfileLoading"])());
    var config = {
      method: 'get',
      url: '/api/profile'
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (res) {
      return dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getProfile"])(res.data));
    }).catch(function (_err) {
      return dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getProfile"])({}));
    });
  };
};
var createProfile = function createProfile(data, errorCb, doneCb, clearInput, redirectWhenSuccess) {
  return function (_dispatch) {
    var config = {
      method: 'post',
      url: '/api/profile',
      data: data
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (_res) {
      clearInput();
      doneCb('Create profile successfully! <3');
      redirectWhenSuccess();
    }).catch(function (err) {
      clearInput();
      errorCb(errorResponse(err.response.data));
    });
  };
};
var addExperience = function addExperience(data, errorCb, doneCb, clearInput, redirectWhenSuccess) {
  return function (_dispatch) {
    var config = {
      method: 'post',
      url: '/api/profile/experience',
      data: data
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (_res) {
      clearInput();
      doneCb('Add Experience Successfully! <3');
      redirectWhenSuccess();
    }).catch(function (err) {
      clearInput();
      errorCb(errorResponse(err.response.data));
    });
  };
};
var addEducation = function addEducation(data, errorCb, doneCb, clearInput, redirectWhenSuccess) {
  return function (_dispatch) {
    var config = {
      method: 'post',
      url: '/api/profile/education',
      data: data
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (_res) {
      clearInput();
      doneCb('Add Education Successfully! <3');
      redirectWhenSuccess();
    }).catch(function (err) {
      clearInput();
      errorCb(errorResponse(err.response.data));
    });
  };
};
var deleteExperience = function deleteExperience(id, errorCb, doneCb) {
  return function (dispatch) {
    var config = {
      method: 'delete',
      url: "/api/profile/education/".concat(id)
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (res) {
      dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getProfile"])(res.data));
      doneCb('Delete Successfully! <3');
    }).catch(function (err) {
      return errorCb(errorResponse(err.response.data));
    });
  };
};
var deleteEducation = function deleteEducation(id, errorCb, doneCb) {
  return function (dispatch) {
    var config = {
      method: 'delete',
      url: "/api/profile/education/".concat(id)
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (res) {
      dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getProfile"])(res.data));
      doneCb('Delete Successfully! <3');
    }).catch(function (err) {
      return errorCb(errorResponse(err.response.data));
    });
  };
}; // Get all profiles

var getAllProfiles = function getAllProfiles(errorCb) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var config;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["setProfileLoading"])());

            case 2:
              config = {
                method: 'get',
                url: '/api/profile/all'
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (res) {
                dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getProfiles"])(res.data));
              }).catch(function (_err) {
                dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getProfiles"])(null));
                errorCb('Error something when get all profiles');
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}; // Delete account & profile

var deleteAccount = function deleteAccount(doneCb, errorCb) {
  return function (dispatch) {
    var config = {
      method: 'delete',
      url: '/api/profile'
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function (_res) {
      dispatch(Object(store_auth_action__WEBPACK_IMPORTED_MODULE_1__["setCurrentUser"])({}));
      doneCb('Delete Account successfully!');
    }).catch(function (err) {
      return errorCb(errorResponse(err.response.data));
    });
  };
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/profile/reducer.ts":
/*!*********************************************!*\
  !*** ./src/shared/store/profile/reducer.ts ***!
  \*********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/shared/store/profile/action.ts");


var initialState = Object.freeze({
  profile: {
    profile: null,
    profiles: null,
    loading: false
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, function (draft) {
    switch (action.type) {
      case _action__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].PROFILE_LOADING:
        {
          draft.profile.loading = true;
          return;
        }

      case _action__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_PROFILE:
        {
          draft.profile.profile = action.payload;
          draft.profile.loading = false;
          return;
        }

      case _action__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_PROFILES:
        {
          draft.profile.profiles = action.payload;
          draft.profile.loading = false;
          return;
        }

      case _action__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLEAR_CURRENT_PROFILE:
        {
          draft.profile.profile = null;
          return;
        }

      default:
        return state;
    }
  });
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/store/rootReducer.ts":
/*!*****************************************!*\
  !*** ./src/shared/store/rootReducer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/reducer */ "./src/shared/store/app/reducer.ts");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/reducer */ "./src/shared/store/auth/reducer.ts");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/reducer */ "./src/shared/store/errors/reducer.ts");
/* harmony import */ var _profile_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/reducer */ "./src/shared/store/profile/reducer.ts");






var createRootReducer = function createRootReducer() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    app: _app_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    profile: _profile_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/styles/CenterComponent.ts":
/*!**********************************************!*\
  !*** ./src/shared/styles/CenterComponent.ts ***!
  \**********************************************/
/*! exports provided: CenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterComponent", function() { return CenterComponent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var CenterComponent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/styles/Filter.Styles.ts":
/*!********************************************!*\
  !*** ./src/shared/styles/Filter.Styles.ts ***!
  \********************************************/
/*! exports provided: FilterStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStyles", function() { return FilterStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    overflow-x: auto;\n    margin-bottom: 25px;\n    border-top: 1px solid #eee;\n    padding: 25px 20px;\n    display: flex;\n    justify-content: center;\n    &::-webkit-scrollbar {\n        display: none;\n        width: 0;\n    }\n    @media screen and (max-width: 767px) {\n        justify-content: left;\n    }\n    .filter-item {\n        display: inline-block;\n        padding: 15px;\n        border-radius: 6px;\n        color: #999;\n        transition: 0.25s linear;\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 500;\n        white-space: nowrap;\n        &.active {\n            background-color: #eee;\n            color: #333;\n            pointer-events: none;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FilterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/styles/Form.Styles.css":
/*!*******************************************!*\
  !*** ./src/shared/styles/Form.Styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1612335940804
      var cssReload = __webpack_require__(/*! ../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/styles/GlobalStyles.ts":
/*!*******************************************!*\
  !*** ./src/shared/styles/GlobalStyles.ts ***!
  \*******************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  .sweet-noti {\n\t\tpadding: 2rem;\n\t\tbackground-color: white;\n\t\tbox-shadow: 0px 2px 7px rgba(63, 63, 122, 0.1);\n\t\tborder-radius: 8px;\n\t\tposition: fixed;\n\t\ttop: 1rem;\n\t\tright: 1rem;\n\t\tz-index: 100000;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\ttransition: 0.2s linear;\n\t\tanimation: fadeAlert 2s forwards 1 linear;\n        color: #13D2B8;\n\t\t&:before {\n\t\t\tcontent: \"\";\n\t\t\twidth: 100%;\n\t\t\theight: 4px;\n\t\t\tborder-radius: 8px;\n\t\t\tbackground-color: currentColor;\n\t\t\tposition: absolute;\n\t\t\ttop: -4px;\n\t\t\tleft: 0;\n\t\t}\n\t\t@media screen and (max-width: 767px) {\n\t\t\twidth: auto;\n\t\t\tleft: 1rem;\n\t\t\tright: 1rem;\n\t\t\ttop: 1rem;\n\t\t\tpadding: 1.5rem;\n\t\t}\n\t}\n\ti.sweet-noti__icon {\n\t\tfont-size: 4rem;\n\t\tmargin-right: 1.5rem;\n\t\tflex-shrink: 0;\n\n\t}\n\t.sweet-noti__content{\n\t\twidth: 100%;\n\t\tcolor: #474747;\n\t\tletter-spacing: 0.015em;\n\t}\n\t.sweet-noti__title {\n\t\tmargin-bottom: 5px;\n    text-transform: uppercase;\n    font-weight: bold;\n\t}\n\t.sweet-noti__message {\n\t\tfont-size: 1.4rem;\n\t\tline-height: 1.4;\n\n\t}\n\n\t@keyframes fadeAlert {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\t\t10%,90% {\n\t\t\topacity: 1;\n\t\t\tvisibility: visible;\n\t\t}\n\t\t100% {\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\t}\n\n\t.back-to-top {\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tposition: fixed;\n\t\tright: 30px;\n\t\tbottom: 30px;\n\t\tz-index: 10;\n\t\tbackground-color: #ff7870;\n\t\tdisplay:flex;\n\t\talign-items:center;\n\t\tjustify-content:center;\n\t\tfont-size: 20px;\n\t\tcolor: white;\n\t\topacity: 0.5;\n\t\t&:hover {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/styles/LinkCustom.Styles.ts":
/*!************************************************!*\
  !*** ./src/shared/styles/LinkCustom.Styles.ts ***!
  \************************************************/
/*! exports provided: LinkCustom, LinkCustomActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCustom", function() { return LinkCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCustomActive", function() { return LinkCustomActive; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: white !important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: black !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LinkCustom = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])(_templateObject());
var LinkCustomActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])(_templateObject2());

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/styles/Theme.ts":
/*!************************************!*\
  !*** ./src/shared/styles/Theme.ts ***!
  \************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
var theme = {
  primary: '#08aeea',
  secondary: '#13D2B8'
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/utils/clearData.ts":
/*!***************************************!*\
  !*** ./src/shared/utils/clearData.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var store_auth_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/auth/effects */ "./src/shared/store/auth/effects.ts");
/* harmony import */ var store_profile_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/profile/action */ "./src/shared/store/profile/action.ts");


/* harmony default export */ __webpack_exports__["default"] = (function (dispatch, data) {
  dispatch(Object(store_auth_effects__WEBPACK_IMPORTED_MODULE_0__["dispatchSetCurrentUser"])(data));
  dispatch(Object(store_profile_action__WEBPACK_IMPORTED_MODULE_1__["clearCurrentProfile"])());
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/utils/setAuthToken.ts":
/*!******************************************!*\
  !*** ./src/shared/utils/setAuthToken.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setAuthToken = function setAuthToken(token) {
  if (token) {
    // eslint-disable-next-line dot-notation
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = token;
  } else {
    // eslint-disable-next-line dot-notation
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/utils/setData.ts":
/*!*************************************!*\
  !*** ./src/shared/utils/setData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var store_auth_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/auth/effects */ "./src/shared/store/auth/effects.ts");
/* harmony import */ var store_profile_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/profile/effects */ "./src/shared/store/profile/effects.ts");


/* harmony default export */ __webpack_exports__["default"] = (function (dispatch, decoded) {
  dispatch(Object(store_auth_effects__WEBPACK_IMPORTED_MODULE_0__["dispatchSetCurrentUser"])(decoded));
  dispatch(Object(store_profile_effects__WEBPACK_IMPORTED_MODULE_1__["getCurrentProfile"])());
});

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/shared/validation/isEmpty.ts":
/*!******************************************!*\
  !*** ./src/shared/validation/isEmpty.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || _typeof(value) === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js webpack-hot-middleware/client?path=http://localhost:8501/__webpack_hmr ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ErrorOverlayEntry.js ./src/client ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/quoctrung163/Desktop/snack-dev/node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js");
__webpack_require__(/*! webpack-hot-middleware/client?path=http://localhost:8501/__webpack_hmr */"./node_modules/webpack-hot-middleware/client.js?path=http://localhost:8501/__webpack_hmr");
__webpack_require__(/*! /Users/quoctrung163/Desktop/snack-dev/node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ErrorOverlayEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ErrorOverlayEntry.js");
module.exports = __webpack_require__(/*! /Users/quoctrung163/Desktop/snack-dev/src/client */"./src/client/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLm1vZHVsZS5jc3M/NDJkMCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvZmF2aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL2NvdXJzZS0xLTEuanBnIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXNzZXRzL2ltYWdlcy9jb3Vyc2UtMS0yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pbWFnZXMvY291cnNlLTEtMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL2NvdXJzZS0xLTQuanBnIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXNzZXRzL2ltYWdlcy9jb3Vyc2UtMS01LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pbWFnZXMvY291cnNlLTEtNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL2xvZ28tZGlyZWN0aS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL2xvZ28tZ29qZWsucG5nIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXNzZXRzL2ltYWdlcy9sb2dvLW1ha2UtbXktdHJpcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL2xvZ28tbWljcm9zb2Z0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pbWFnZXMvbG9nby1wYXl0bS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL2xvZ28tc3dpZ2d5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pbWFnZXMvbG9nby16b21hdG8ucG5nIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXNzZXRzL2ltYWdlcy90ZWFtLTEtMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL3RlYW0tMS0yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pbWFnZXMvdGVhbS0xLTMuanBnIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXNzZXRzL2ltYWdlcy90ZWFtLTEtNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hc3NldHMvaW1hZ2VzL3RlYW0tMS01LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pbWFnZXMvdGVhbS0xLTYuanBnIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Db3Vyc2VPbmUvQ291cnNlT25lLlN0eWxlcy5jc3M/M2I0MSIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvQ291cnNlT25lL0NvdXJzZU9uZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5TdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uLlN0eWxlcy5jc3M/Y2IwMiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvSW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xvZ2luL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvUGFydG5lcnMvUGFydG5lcnMuU3R5bGVzLmNzcz82YjRjIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9QYXJ0bmVycy9QYXJ0bmVycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvU2Nyb2xsVG9wQXJyb3cvU2Nyb2xsVG9wQXJyb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9IZWFkZXJDb250YWluZXIvSGVhZGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2kxOG4vSW50bFByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3BhZ2VzL0hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvTG9naW4vTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvUmVnaXN0ZXIvUmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3RvcmUvYXBwL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdG9yZS9hcHAvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlL2FwcC9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdG9yZS9hdXRoL2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlL2F1dGgvZWZmZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlL2F1dGgvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlL2F1dGgvc2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3RvcmUvZXJyb3JzL2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlL2Vycm9ycy9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3RvcmUvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3RvcmUvcHJvZmlsZS9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdG9yZS9wcm9maWxlL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdG9yZS9wcm9maWxlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdG9yZS9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0eWxlcy9DZW50ZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdHlsZXMvRmlsdGVyLlN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0eWxlcy9Gb3JtLlN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdHlsZXMvR2xvYmFsU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3R5bGVzL0xpbmtDdXN0b20uU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3R5bGVzL1RoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXRpbHMvY2xlYXJEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXRpbHMvc2V0QXV0aFRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXRpbHMvc2V0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3ZhbGlkYXRpb24vaXNFbXB0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJ1cGRhdGVzL1wiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwidXBkYXRlcy9cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCIxNWZiZGE5ZjJiZGU0OTE1N2JjYVwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJidW5kbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXG4gXHRcdGxldCBjbGVhbnVwID0gZnVuY3Rpb24gTm9PcCgpIHt9O1xuXG4gXHRcdGNvbnN0IGNoZWNrID0gZnVuY3Rpb24oaXQpIHtcbiBcdFx0ICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xuIFx0XHR9O1xuXG4gXHRcdGNvbnN0IHNhZmVUaGlzID1cbiBcdFx0ICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuIFx0XHQgIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuIFx0XHQgIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gXHRcdCAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gXHRcdCAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuIFx0XHRpZiAoc2FmZVRoaXMgJiYgc2FmZVRoaXMuJFJlZnJlc2hTZXR1cCQpIHtcbiBcdFx0ICBjbGVhbnVwID0gc2FmZVRoaXMuJFJlZnJlc2hTZXR1cCQobW9kdWxlLmkpO1xuIFx0XHR9XG5cbiBcdFx0dHJ5IHtcblxuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHQgIGNsZWFudXAoKTtcbiBcdFx0fVxuXG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0Ojg1MDEvc3RhdGljL1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEhlbG1ldFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcblxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnLi4vc2hhcmVkL3N0b3JlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCc7XG5pbXBvcnQgSW50bFByb3ZpZGVyIGZyb20gJy4uL3NoYXJlZC9pMThuL0ludGxQcm92aWRlcic7XG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICcuLi9zaGFyZWQvc3RvcmUvaGlzdG9yeSc7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vc2hhcmVkL3N0eWxlcy9UaGVtZSc7XG5cbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KCk7XG5cbi8vIENyZWF0ZS91c2UgdGhlIHN0b3JlXG4vLyBoaXN0b3J5IE1VU1QgYmUgcGFzc2VkIGhlcmUgaWYgeW91IHdhbnQgc3luY2luZyBiZXR3ZWVuIHNlcnZlciBvbiBpbml0aWFsIHJvdXRlXG5jb25zdCBzdG9yZSA9XG4gICAgd2luZG93LnN0b3JlIHx8XG4gICAgY29uZmlndXJlU3RvcmUoe1xuICAgICAgICBpbml0aWFsU3RhdGU6IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fLFxuICAgIH0pO1xuXG5oeWRyYXRlKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgPEludGxQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8SGVsbWV0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L0hlbG1ldFByb3ZpZGVyPlxuICAgICAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5zdG9yZSkge1xuICAgICAgICB3aW5kb3cuc3RvcmUgPSBzdG9yZTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid3JhcHBlclwiOlwiQXBwX3dyYXBwZXJfXzNXNi0zXCIsXCJyZWFjdExvZ29cIjpcIkFwcF9yZWFjdExvZ29fXzNUYnF1XCIsXCJjb250YWluZXJcIjpcIkFwcF9jb250YWluZXJfXzN2S2VqXCIsXCJwb2ludC1ub25lXCI6XCJBcHBfcG9pbnQtbm9uZV9fMkdLOUdcIixcInBvaW50Tm9uZVwiOlwiQXBwX3BvaW50LW5vbmVfXzJHSzlHXCIsXCJmbGV4XCI6XCJBcHBfZmxleF9fekY0Vk5cIixcImFsaWduLWNlbnRlclwiOlwiQXBwX2FsaWduLWNlbnRlcl9fMW8teVJcIixcImFsaWduQ2VudGVyXCI6XCJBcHBfYWxpZ24tY2VudGVyX18xby15UlwiLFwianVzdGlmeS1iZXR3ZWVuXCI6XCJBcHBfanVzdGlmeS1iZXR3ZWVuX18xbVpjVVwiLFwianVzdGlmeUJldHdlZW5cIjpcIkFwcF9qdXN0aWZ5LWJldHdlZW5fXzFtWmNVXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTIzMzU5NDEyMjFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBmYXZpY29uIGZyb20gJy4uL3NoYXJlZC9hc3NldHMvZmF2aWNvbi5wbmcnO1xuaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tICcuL3V0aWxzL3NldEF1dGhUb2tlbic7XG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnLi9zdG9yZS9hdXRoL2VmZmVjdHMnO1xuaW1wb3J0IHNldERhdGEgZnJvbSAnLi91dGlscy9zZXREYXRhJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL3BhZ2VzL0xvZ2luL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyL1JlZ2lzdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb250YWluZXJzL0hlYWRlckNvbnRhaW5lci9IZWFkZXJDb250YWluZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5cbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi9zdHlsZXMvR2xvYmFsU3R5bGVzJztcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmltcG9ydCBjc3MgZnJvbSAnLi9BcHAubW9kdWxlLmNzcyc7XG5cbi8vIERvZXMgbm90IHlldCB3b3JrIHdpdGggc2VydmVyIHNpZGUgcmVuZGVyaW5nOlxuLy8gY29uc3QgSG9tZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL0hvbWUnKSk7XG4vLyBjb25zdCBQYWdlMSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL1BhZ2UtMScpKTtcbi8vIGNvbnN0IFBhZ2UyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vcGFnZXMvUGFnZS0yJykpO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDPGFueT4gPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmp3dFRva2VuKSB7XG4gICAgICAgICAgICAvLyBTZXQgYXV0aCB0b2tlbiBhbmQgZ2V0IHVzZXIgaW5mbyBhbmQgZXhwb3J0IGRlZmF1bHRcbiAgICAgICAgICAgIHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2Uuand0VG9rZW4pO1xuICAgICAgICAgICAgLy8gRGVjb2RlIHRva2VuIGFuZCBnZXQgdXNlciBpbmZvIGFuZCBleHBvcnQgZGVmYXVsdFxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlY29kZShsb2NhbFN0b3JhZ2Uuand0VG9rZW4pO1xuICAgICAgICAgICAgLy8gU2V0IHVzZXIgYW5kIGlzQXV0aGVudGljYXRlZCBieSBjYWxsIGFueSBhY3Rpb24gdXNpbmcgYmVsbG93IG1ldGhvZFxuICAgICAgICAgICAgc2V0RGF0YShkaXNwYXRjaCwgZGVjb2RlZCk7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgZXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgICAgIGlmICgoZGVjb2RlZCBhcyBhbnkpLmV4cCA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9nb3V0IHVzZXJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dvdXRVc2VyKCgpID0+IGhpc3Rvcnk/LnB1c2goJy8nKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBoaXN0b3J5XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZzwvZGl2Pn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mud3JhcHBlcn0+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgIDxIZWxtZXRcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGl0bGU9XCJSZWFjdCBTU1IgU3RhcnRlciDigJMgVHlwZVNjcmlwdCBFZGl0aW9uXCJcbiAgICAgICAgICAgICAgICB0aXRsZVRlbXBsYXRlPVwiJXMg4oCTIFJlYWN0IFNTUiBTdGFydGVyIOKAkyBUeXBlU2NyaXB0IEVkaXRpb25cIlxuICAgICAgICAgICAgICAgIGxpbms9e1t7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogZmF2aWNvbiB9XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtyb3V0ZXMuaG9tZX0gY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtyb3V0ZXMubG9naW59IGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e3JvdXRlcy5yZWdpc3Rlcn0gY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXsoKSA9PiAnNDA0ISd9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vIDwvU3VzcGVuc2U+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZmF2aWNvbi5kMmU2ODVkMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NvdXJzZS0xLTEuZDY1YWI2MTMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jb3Vyc2UtMS0yLmQ2NWFiNjEzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY291cnNlLTEtMy5kNjVhYjYxMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NvdXJzZS0xLTQuZDY1YWI2MTMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jb3Vyc2UtMS01LmQ2NWFiNjEzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY291cnNlLTEtNi5kNjVhYjYxMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2xvZ28tZGlyZWN0aS4xOGRkMDUxZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2xvZ28tZ29qZWsuMjNlYjFmZmQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9sb2dvLW1ha2UtbXktdHJpcC5hMjQ5NmZjYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2xvZ28tbWljcm9zb2Z0LmNiZGUyODAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbG9nby1wYXl0bS41YjUyNmI2MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2xvZ28tc3dpZ2d5LmU5Y2NhMDRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbG9nby16b21hdG8uYjkzNGJlNzYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8yd0JEQUFnR0JnY0dCUWdIQndjSkNRZ0tEQlFOREFzTERCa1NFdzhVSFJvZkhoMGFIQndnSkM0bklDSXNJeHdjS0RjcExEQXhORFEwSHljNVBUZ3lQQzR6TkRMLzJ3QkRBUWtKQ1F3TERCZ05EUmd5SVJ3aE1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakwvd0FBUkNBRE9BTTREQVNJQUFoRUJBeEVCLzhRQUdnQUJBUUVCQVFFQkFBQUFBQUFBQUFBQUFBTUVBZ1VCQi8vRUFESVFBQUlDQWdFQ0F3VUlBZ01CQUFBQUFBQUJBZ01SRWdRVElURkJVUlFpY1lHUkJTTXlRbUdod2RHeDhDUXprdkgveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS84UUFGQkVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9UQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREx5NmJPUk9tdFo2T1c3Y1BHZlJHb3cvYVhLNkVhcTFaMHVxMm5aak9xWGpqOVFNdGsxd1pjdXZqeWZUalVuak9kSk40TGV6eDRGL0duVzVmZVM2ZG1aTjdOcngrcHgveE9Sd0x1THc1YlQxMmZaNWswL05zNzlvano3K05DdFMrN2wxTE14YTFhWGg5UUlYVDR0M0l2Zkt1Y1hHVHJxV1g3dVBQdCtwNnRLa3VQQlNtckphcjNsNFMvVTg1V1VjT3psMTN3ZTFzM0tQdXQ3cCtTK2VUWndZU280RlVMZTBveDc1OGdKcjdRMmhGS3I3K1ZuVGRXM2cxNHZQcGcxMmJxcWZUV1o2dlg0K1I1TUp1UExYMmpLS1ZOa3VuNGQwdkJTL1k5VzJ4VlZUc2ZoR0xrL2tCNWQzR1hFNDFWKzB2Yk5vNWV6ZXpiN29vdVBIbjI4cXlibHRDYnJxeEpyVEM4Vjh5UEY1ZkRjMXlPVHlGUGtQd1RpOFEvUmRpeTVFZUJieXE1cVcwNXV5ckVXOThyd1h6QTRzNVhXNFhFVnRqaEczTHNsbkhhSzcvVTBmWjZwVHNmRnRVcUhqRU8vdXY1a0pjZGNhamcyWFFjbzA1M1dNNjVYajhtVzRyamZ6N3VUVW4wWEJSMnhqWitvRzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURKWmZkQjN6VHIwcWtscTR2TDkxUHh6K3ZvQnJCRDJxUFUxMW5ydHB2ajNjK24xN0hTNUZleWkyMUp6Y0VuNm9Db0llMHgxZzR3bkp6enJGSlphWG44UDdFdVZDTmRjMUdjdXBMVlJTNzU3LzB3TGdoTGxSaTNtdWVJcGJ2Q3hEUHIzL3hrbnpPVHBSZkdFYkhLTUhtY2Z5dkhZRFdDUExrNDhPK1VXMDFYSnByeTdDSElVMjEwN0l5MTJTa2xtUy9RQ3dKUnZoUHBhNWZVV1ZqeVg2bk52SWhUZlhHeWNJUWxHVHpKNDdwcisyQmNHYVBJZDlzNGNlMnBxTVl2YkczanRsZG12UkUxZnlmWVkzNXFsT3hRMWpxMGxzMHUvZnY0Z2JRWTdPWThVT3BKN3VPKzM1VTVKZlhML1ptaXV4enN1aThZaFBWZitVLzVBb0NWMWtxMUZRU2M1eTFqbnc5ZjhKbnpleXFxeWR6aEpSanRtQ2ErUG1CWUdicWNpdlNkcXIwazFGeGlubU9leTcrZmY0SEZmTWVMM2FrdEhMVEg1a20xOWNyOTBCc0JIaTJXVzBLVnFpcDdTaTFIdzdOcitDd0FBQUFBQUl4NHRTdXN0bENFcHlrbW00cks3Sll6OGl3QXorelMyeDFQdXQrcHByM3puUGo2WjduTm5EM3Rzc1ZqVXBKYTl2d3Z0My9aZlExQUROYnc0V1FxaWxCdXBheDNoc3NmRDVIVWVPb3hwU2NWMDVPV0l4d25sTmVIbDRsd0JrdDRNTExwV1lxelBHMjlhay9Ucy9MOXo3ZnhaMks2TUx0STJyM2xybnZqSGJ2NllOUUE0dXI2MUZsV2NieGNjK21VVGhWS0UrcmJaMUhHTFN4REhieitMN0l1QU0zRXExNmxyVGp2SnVNWCtXT2YvcitaWjE1dmhibjhNWlJ4OFd2Nk93QndxOFh6dHorS01ZNCtEZjhBWk5jZkhGcXAyLzY5TytQSFZwL3dYQUVKY1d2M3RGcTVUak9UOGM0bG4vZmlmT2pkRzJ5VmR0YVU1YllsVzNqc2w2cjBOQUFsWlRLeFBOalRVbEtEUy9EMng4L1A2aU5jNVFuRzZjWnFTeGlNZFZqNnNxQU04ZVBZM0ZXWGJ3ZzAwdGNONDhNdnovWSt4NHRmdTdyWnhuS2NYNFl6TFA4QXZ3TGdEaXF2cFFjYzV6S1V2cTIvNU93QVAvL1pcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQURPQU00REFTSUFBaEVCQXhFQi84UUFHZ0FCQVFFQkFRRUJBQUFBQUFBQUFBQUFBQU1FQWdVQkIvL0VBRElRQUFJQ0FnRUNBd1VJQWdNQkFBQUFBQUFCQWdNUkVnUVRJVEZCVVJRaWNZR1JCU015UW1HaHdkR3g4Q1F6a3ZIL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOFFBRkJFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvYUFBd0RBUUFDRVFNUkFEOEEvVEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURMeTZiT1JPbXRaNk9XN2NQR2ZSR293L2FYSzZFYXExWjB1cTJuWmpPcVhqajlRTXRrMXdaY3V2anlmVGpVbmpPZEpONExleng0Ri9Hblc1ZmVTNmRtWk43TnJ4K3B4L3hPUndMdUx3NWJUMTJmWjVrMC9Oczc5b2p6NytOQ3RTKzdsMUxNeGExYVhoOVFJWFQ0dDNJdmZLdWNYR1RycVdYN3VQUHQrcDZ0S2t1UEJTbXJKYXIzbDRTL1U4NVdVY096bDEzd2UxczNLUHV0N3ArUytlVFp3WVNvNEZVTGUwb3g3NThnSnI3UTJoRktyNytWblRkVzNnMTR2UHBnMTJicXFmVFdaNnZYNCtSNU1KdVBMWDJqS0tWTmt1bjRkMHZCUy9ZOVcyeFZWVHNmaEdMay9rQjVkM0dYRTQxViswdmJObzVlemV6Yjdvb3VQSG4yOHF5Ymx0Q2JycXhKclRDOFY4eVBGNWZEYzF5T1R5RlBrUHdUaThRL1JkaXk1RWVCYnlxNXFXMDV1eXJFVzk4cndYekE0czVYVzRYRVZ0amhHM0xzbG5IYUs3L1UwZlo2cFRzZkZ0VXFIakVPL3V2NWtKY2RjYWpnMlhRY28wNTNXTTY1WGo4bVc0cmpmejd1VFVuMFhCUjJ4alorb0c4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFESlpmZEIzelRyMHFrbHE0dkw5MVB4eit2b0JyQkQycVBVMTFucnRwdmozYytuMTdIUzVGZXlpMjFKemNFbjZvQ29JZTB4MWc0d25KenpyRkpaYVhuOFA3RXVWQ05kYzFHY3VwTFZSUzc1Ny8wd0xnaExsUmkzbXVlSXBidkN4RFByMy94a256T1RwUmZHRWJIS01IbWNmeXZIWURXQ1BMazQ4TytVVzAxWEpwcnk3Q0hJVTIxMDdJeTEyU2tsbVMvUUN3SlJ2aFBwYTVmVVdWanlYNm5OdkloVGZYR3ljSVFsR1R6SjQ3cHIrMkJjR2FQSWQ5czRjZTJwcU1ZdmJHM2p0bGRtdlJFMWZ5ZllZMzVxbE94UTFqcTBsczB1L2Z2NGdiUVk3T1k4VU9wSjd1TyszNVU1SmZYTC9abWl1eHpzdWk4WWhQVmYrVS81QW9DVjFrcTFGUVNjNXkxam53OWY4Sm56ZXlxcXlkemhKUmp0bUNhK1BtQllHYnFjaXZTZHFyMGsxRnhpbm1PZXk3K2ZmNEhGZk1lTDNha3RITFRINWttMTljcjkwQnNCSGkyV1cwS1ZxaXA3U2kxSHc3TnIrQ3dBQUFBQUFJeDR0U3VzdGxDRXB5a21tNHJLN0pZejhpd0F6K3pTMngxUHV0K3BwcjN6blBqNlo3bk5uRDN0c3NWalVwSmE5dnd2dDMvWmZRMUFETmJ3NFdRcWlsQnVwYXgzaHNzZkQ1SFVlT294cFNjVjA1T1dJeHdubE5lSGw0bHdCa3Q0TUxMcFdZcXpQRzI5YWsvVHMvTDl6N2Z4WjJLNk1MdEkycjNscm52akhidjZZTlFBNHVyNjFGbFdjYnhjYyttVVRoVktFK3JiWjFIR0xTeERIYnorTDdJdUFNM0VxMTZsclRqdkp1TVgrV09mL3IrWloxNXZoYm44TVpSeDhXdjZPd0J3cThYenR6K0tNWTQrRGY4QVpOY2ZIRnFwMi82OU8rUEhWcC93WEFFSmNXdjN0RnE1VGpPVDhjNGxuL2ZpZk9qZEcyeVZkdGFVNWJZbFczanNsNnIwTkFBbFpUS3hQTmpUVWxLRFMvRDJ4OC9QNmlOYzVRbkc2Y1pxU3hpTWRWajZzcUFNOGVQWTNGV1hid2cwMHRjTjQ4TXZ6L1kreDR0ZnU3clp4bktjWDRZekxQOEF2d0xnRGlxdnBRY2M1ektVdnEyLzVPd0FQLy9aXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELzJ3QkRBQWdHQmdjR0JRZ0hCd2NKQ1FnS0RCUU5EQXNMREJrU0V3OFVIUm9mSGgwYUhCd2dKQzRuSUNJc0l4d2NLRGNwTERBeE5EUTBIeWM1UFRneVBDNHpOREwvMndCREFRa0pDUXdMREJnTkRSZ3lJUndoTWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qTC93QUFSQ0FET0FNNERBU0lBQWhFQkF4RUIvOFFBR2dBQkFRRUJBUUVCQUFBQUFBQUFBQUFBQUFNRUFnVUJCLy9FQURJUUFBSUNBZ0VDQXdVSUFnTUJBQUFBQUFBQkFnTVJFZ1FUSVRGQlVSUWljWUdSQlNNeVFtR2h3ZEd4OENRemt2SC94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzhRQUZCRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQXdEQVFBQ0VRTVJBRDhBL1RBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFETHk2Yk9ST210WjZPVzdjUEdmUkdvdy9hWEs2RWFxMVowdXEyblpqT3FYamo5UU10azF3WmN1dmp5ZlRqVW5qT2RKTjRMZXp4NEYvR25XNWZlUzZkbVpON05yeCtweC94T1J3THVMdzViVDEyZlo1azAvTnM3OW9qejcrTkN0Uys3bDFMTXhhMWFYaDlRSVhUNHQzSXZmS3VjWEdUcnFXWDd1UFB0K3A2dEtrdVBCU21ySmFyM2w0Uy9VODVXVWNPemwxM3dlMXMzS1B1dDdwK1MrZVRad1lTbzRGVUxlMG94NzU4Z0pyN1EyaEZLcjcrVm5UZFczZzE0dlBwZzEyYnFxZlRXWjZ2WDQrUjVNSnVQTFgyaktLVk5rdW40ZDB2QlMvWTlXMnhWVlRzZmhHTGsva0I1ZDNHWEU0MVYrMHZiTm81ZXplemI3b291UEhuMjhxeWJsdENicnF4SnJUQzhWOHlQRjVmRGMxeU9UeUZQa1B3VGk4US9SZGl5NUVlQmJ5cTVxVzA1dXlyRVc5OHJ3WHpBNHM1WFc0WEVWdGpoRzNMc2xuSGFLNy9VMGZaNnBUc2ZGdFVxSGpFTy91djVrSmNkY2FqZzJYUWNvMDUzV002NVhqOG1XNHJqZno3dVRVbjBYQlIyeGpaK29HOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREpaZmRCM3pUcjBxa2xxNHZMOTFQeHordm9CckJEMnFQVTExbnJ0cHZqM2MrbjE3SFM1RmV5aTIxSnpjRW42b0NvSWUweDFnNHduSnp6ckZKWmFYbjhQN0V1VkNOZGMxR2N1cExWUlM3NTcvMHdMZ2hMbFJpM211ZUlwYnZDeERQcjMveGtuek9UcFJmR0ViSEtNSG1jZnl2SFlEV0NQTGs0OE8rVVcwMVhKcHJ5N0NISVUyMTA3SXkxMlNrbG1TL1FDd0pSdmhQcGE1ZlVXVmp5WDZuTnZJaFRmWEd5Y0lRbEdUeko0N3ByKzJCY0dhUElkOXM0Y2UycHFNWXZiRzNqdGxkbXZSRTFmeWZZWTM1cWxPeFExanEwbHMwdS9mdjRnYlFZN09ZOFVPcEo3dU8rMzVVNUpmWEwvWm1pdXh6c3VpOFloUFZmK1UvNUFvQ1Yxa3ExRlFTYzV5MWpudzlmOEpuemV5cXF5ZHpoSlJqdG1DYStQbUJZR2JxY2l2U2RxcjBrMUZ4aW5tT2V5NytmZjRIRmZNZUwzYWt0SExUSDVrbTE5Y3I5MEJzQkhpMldXMEtWcWlwN1NpMUh3N05yK0N3QUFBQUFBSXg0dFN1c3RsQ0VweWttbTRySzdKWXo4aXdBeit6UzJ4MVB1dCtwcHIzem5QajZaN25ObkQzdHNzVmpVcEphOXZ3dnQzL1pmUTFBRE5idzRXUXFpbEJ1cGF4M2hzc2ZENUhVZU9veHBTY1YwNU9XSXh3bmxOZUhsNGx3Qmt0NE1MTHBXWXF6UEcyOWFrL1RzL0w5ejdmeFoySzZNTHRJMnIzbHJudmpIYnY2WU5RQTR1cjYxRmxXY2J4Y2MrbVVUaFZLRStyYloxSEdMU3hESGJ6K0w3SXVBTTNFcTE2bHJUanZKdU1YK1dPZi9yK1paMTV2aGJuOE1aUng4V3Y2T3dCd3E4WHp0eitLTVk0K0RmOEFaTmNmSEZxcDIvNjlPK1BIVnAvd1hBRUpjV3YzdEZxNVRqT1Q4YzRsbi9maWZPamRHMnlWZHRhVTViWWxXM2pzbDZyME5BQWxaVEt4UE5qVFVsS0RTL0QyeDgvUDZpTmM1UW5HNmNacVN4aU1kVmo2c3FBTThlUFkzRldYYndnMDB0Y040OE12ei9ZK3g0dGZ1N3JaeG5LY1g0WXpMUDhBdndMZ0RpcXZwUWNjNXpLVXZxMi81T3dBUC8vWlwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8yd0JEQUFnR0JnY0dCUWdIQndjSkNRZ0tEQlFOREFzTERCa1NFdzhVSFJvZkhoMGFIQndnSkM0bklDSXNJeHdjS0RjcExEQXhORFEwSHljNVBUZ3lQQzR6TkRMLzJ3QkRBUWtKQ1F3TERCZ05EUmd5SVJ3aE1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakwvd0FBUkNBRE9BTTREQVNJQUFoRUJBeEVCLzhRQUdnQUJBUUVCQVFFQkFBQUFBQUFBQUFBQUFBTUVBZ1VCQi8vRUFESVFBQUlDQWdFQ0F3VUlBZ01CQUFBQUFBQUJBZ01SRWdRVElURkJVUlFpY1lHUkJTTXlRbUdod2RHeDhDUXprdkgveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS84UUFGQkVCQUFBQUFBQUFBQUFBQUFBQUFBQUFBUC9hQUF3REFRQUNFUU1SQUQ4QS9UQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREx5NmJPUk9tdFo2T1c3Y1BHZlJHb3cvYVhLNkVhcTFaMHVxMm5aak9xWGpqOVFNdGsxd1pjdXZqeWZUalVuak9kSk40TGV6eDRGL0duVzVmZVM2ZG1aTjdOcngrcHgveE9Sd0x1THc1YlQxMmZaNWswL05zNzlvano3K05DdFMrN2wxTE14YTFhWGg5UUlYVDR0M0l2Zkt1Y1hHVHJxV1g3dVBQdCtwNnRLa3VQQlNtckphcjNsNFMvVTg1V1VjT3psMTN3ZTFzM0tQdXQ3cCtTK2VUWndZU280RlVMZTBveDc1OGdKcjdRMmhGS3I3K1ZuVGRXM2cxNHZQcGcxMmJxcWZUV1o2dlg0K1I1TUp1UExYMmpLS1ZOa3VuNGQwdkJTL1k5VzJ4VlZUc2ZoR0xrL2tCNWQzR1hFNDFWKzB2Yk5vNWV6ZXpiN29vdVBIbjI4cXlibHRDYnJxeEpyVEM4Vjh5UEY1ZkRjMXlPVHlGUGtQd1RpOFEvUmRpeTVFZUJieXE1cVcwNXV5ckVXOThyd1h6QTRzNVhXNFhFVnRqaEczTHNsbkhhSzcvVTBmWjZwVHNmRnRVcUhqRU8vdXY1a0pjZGNhamcyWFFjbzA1M1dNNjVYajhtVzRyamZ6N3VUVW4wWEJSMnhqWitvRzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURKWmZkQjN6VHIwcWtscTR2TDkxUHh6K3ZvQnJCRDJxUFUxMW5ydHB2ajNjK24xN0hTNUZleWkyMUp6Y0VuNm9Db0llMHgxZzR3bkp6enJGSlphWG44UDdFdVZDTmRjMUdjdXBMVlJTNzU3LzB3TGdoTGxSaTNtdWVJcGJ2Q3hEUHIzL3hrbnpPVHBSZkdFYkhLTUhtY2Z5dkhZRFdDUExrNDhPK1VXMDFYSnByeTdDSElVMjEwN0l5MTJTa2xtUy9RQ3dKUnZoUHBhNWZVV1ZqeVg2bk52SWhUZlhHeWNJUWxHVHpKNDdwcisyQmNHYVBJZDlzNGNlMnBxTVl2YkczanRsZG12UkUxZnlmWVkzNXFsT3hRMWpxMGxzMHUvZnY0Z2JRWTdPWThVT3BKN3VPKzM1VTVKZlhML1ptaXV4enN1aThZaFBWZitVLzVBb0NWMWtxMUZRU2M1eTFqbnc5ZjhKbnpleXFxeWR6aEpSanRtQ2ErUG1CWUdicWNpdlNkcXIwazFGeGlubU9leTcrZmY0SEZmTWVMM2FrdEhMVEg1a20xOWNyOTBCc0JIaTJXVzBLVnFpcDdTaTFIdzdOcitDd0FBQUFBQUl4NHRTdXN0bENFcHlrbW00cks3Sll6OGl3QXorelMyeDFQdXQrcHByM3puUGo2WjduTm5EM3Rzc1ZqVXBKYTl2d3Z0My9aZlExQUROYnc0V1FxaWxCdXBheDNoc3NmRDVIVWVPb3hwU2NWMDVPV0l4d25sTmVIbDRsd0JrdDRNTExwV1lxelBHMjlhay9Ucy9MOXo3ZnhaMks2TUx0STJyM2xybnZqSGJ2NllOUUE0dXI2MUZsV2NieGNjK21VVGhWS0UrcmJaMUhHTFN4REhieitMN0l1QU0zRXExNmxyVGp2SnVNWCtXT2YvcitaWjE1dmhibjhNWlJ4OFd2Nk93QndxOFh6dHorS01ZNCtEZjhBWk5jZkhGcXAyLzY5TytQSFZwL3dYQUVKY1d2M3RGcTVUak9UOGM0bG4vZmlmT2pkRzJ5VmR0YVU1YllsVzNqc2w2cjBOQUFsWlRLeFBOalRVbEtEUy9EMng4L1A2aU5jNVFuRzZjWnFTeGlNZFZqNnNxQU04ZVBZM0ZXWGJ3ZzAwdGNONDhNdnovWSt4NHRmdTdyWnhuS2NYNFl6TFA4QXZ3TGdEaXF2cFFjYzV6S1V2cTIvNU93QVAvL1pcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQURPQU00REFTSUFBaEVCQXhFQi84UUFHZ0FCQVFFQkFRRUJBQUFBQUFBQUFBQUFBQU1FQWdVQkIvL0VBRElRQUFJQ0FnRUNBd1VJQWdNQkFBQUFBQUFCQWdNUkVnUVRJVEZCVVJRaWNZR1JCU015UW1HaHdkR3g4Q1F6a3ZIL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOFFBRkJFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvYUFBd0RBUUFDRVFNUkFEOEEvVEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURMeTZiT1JPbXRaNk9XN2NQR2ZSR293L2FYSzZFYXExWjB1cTJuWmpPcVhqajlRTXRrMXdaY3V2anlmVGpVbmpPZEpONExleng0Ri9Hblc1ZmVTNmRtWk43TnJ4K3B4L3hPUndMdUx3NWJUMTJmWjVrMC9Oczc5b2p6NytOQ3RTKzdsMUxNeGExYVhoOVFJWFQ0dDNJdmZLdWNYR1RycVdYN3VQUHQrcDZ0S2t1UEJTbXJKYXIzbDRTL1U4NVdVY096bDEzd2UxczNLUHV0N3ArUytlVFp3WVNvNEZVTGUwb3g3NThnSnI3UTJoRktyNytWblRkVzNnMTR2UHBnMTJicXFmVFdaNnZYNCtSNU1KdVBMWDJqS0tWTmt1bjRkMHZCUy9ZOVcyeFZWVHNmaEdMay9rQjVkM0dYRTQxViswdmJObzVlemV6Yjdvb3VQSG4yOHF5Ymx0Q2JycXhKclRDOFY4eVBGNWZEYzF5T1R5RlBrUHdUaThRL1JkaXk1RWVCYnlxNXFXMDV1eXJFVzk4cndYekE0czVYVzRYRVZ0amhHM0xzbG5IYUs3L1UwZlo2cFRzZkZ0VXFIakVPL3V2NWtKY2RjYWpnMlhRY28wNTNXTTY1WGo4bVc0cmpmejd1VFVuMFhCUjJ4alorb0c4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFESlpmZEIzelRyMHFrbHE0dkw5MVB4eit2b0JyQkQycVBVMTFucnRwdmozYytuMTdIUzVGZXlpMjFKemNFbjZvQ29JZTB4MWc0d25KenpyRkpaYVhuOFA3RXVWQ05kYzFHY3VwTFZSUzc1Ny8wd0xnaExsUmkzbXVlSXBidkN4RFByMy94a256T1RwUmZHRWJIS01IbWNmeXZIWURXQ1BMazQ4TytVVzAxWEpwcnk3Q0hJVTIxMDdJeTEyU2tsbVMvUUN3SlJ2aFBwYTVmVVdWanlYNm5OdkloVGZYR3ljSVFsR1R6SjQ3cHIrMkJjR2FQSWQ5czRjZTJwcU1ZdmJHM2p0bGRtdlJFMWZ5ZllZMzVxbE94UTFqcTBsczB1L2Z2NGdiUVk3T1k4VU9wSjd1TyszNVU1SmZYTC9abWl1eHpzdWk4WWhQVmYrVS81QW9DVjFrcTFGUVNjNXkxam53OWY4Sm56ZXlxcXlkemhKUmp0bUNhK1BtQllHYnFjaXZTZHFyMGsxRnhpbm1PZXk3K2ZmNEhGZk1lTDNha3RITFRINWttMTljcjkwQnNCSGkyV1cwS1ZxaXA3U2kxSHc3TnIrQ3dBQUFBQUFJeDR0U3VzdGxDRXB5a21tNHJLN0pZejhpd0F6K3pTMngxUHV0K3BwcjN6blBqNlo3bk5uRDN0c3NWalVwSmE5dnd2dDMvWmZRMUFETmJ3NFdRcWlsQnVwYXgzaHNzZkQ1SFVlT294cFNjVjA1T1dJeHdubE5lSGw0bHdCa3Q0TUxMcFdZcXpQRzI5YWsvVHMvTDl6N2Z4WjJLNk1MdEkycjNscm52akhidjZZTlFBNHVyNjFGbFdjYnhjYyttVVRoVktFK3JiWjFIR0xTeERIYnorTDdJdUFNM0VxMTZsclRqdkp1TVgrV09mL3IrWloxNXZoYm44TVpSeDhXdjZPd0J3cThYenR6K0tNWTQrRGY4QVpOY2ZIRnFwMi82OU8rUEhWcC93WEFFSmNXdjN0RnE1VGpPVDhjNGxuL2ZpZk9qZEcyeVZkdGFVNWJZbFczanNsNnIwTkFBbFpUS3hQTmpUVWxLRFMvRDJ4OC9QNmlOYzVRbkc2Y1pxU3hpTWRWajZzcUFNOGVQWTNGV1hid2cwMHRjTjQ4TXZ6L1kreDR0ZnU3clp4bktjWDRZekxQOEF2d0xnRGlxdnBRY2M1ektVdnEyLzVPd0FQLy9aXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELzJ3QkRBQWdHQmdjR0JRZ0hCd2NKQ1FnS0RCUU5EQXNMREJrU0V3OFVIUm9mSGgwYUhCd2dKQzRuSUNJc0l4d2NLRGNwTERBeE5EUTBIeWM1UFRneVBDNHpOREwvMndCREFRa0pDUXdMREJnTkRSZ3lJUndoTWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qTC93QUFSQ0FET0FNNERBU0lBQWhFQkF4RUIvOFFBR2dBQkFRRUJBUUVCQUFBQUFBQUFBQUFBQUFNRUFnVUJCLy9FQURJUUFBSUNBZ0VDQXdVSUFnTUJBQUFBQUFBQkFnTVJFZ1FUSVRGQlVSUWljWUdSQlNNeVFtR2h3ZEd4OENRemt2SC94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzhRQUZCRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFQL2FBQXdEQVFBQ0VRTVJBRDhBL1RBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFETHk2Yk9ST210WjZPVzdjUEdmUkdvdy9hWEs2RWFxMVowdXEyblpqT3FYamo5UU10azF3WmN1dmp5ZlRqVW5qT2RKTjRMZXp4NEYvR25XNWZlUzZkbVpON05yeCtweC94T1J3THVMdzViVDEyZlo1azAvTnM3OW9qejcrTkN0Uys3bDFMTXhhMWFYaDlRSVhUNHQzSXZmS3VjWEdUcnFXWDd1UFB0K3A2dEtrdVBCU21ySmFyM2w0Uy9VODVXVWNPemwxM3dlMXMzS1B1dDdwK1MrZVRad1lTbzRGVUxlMG94NzU4Z0pyN1EyaEZLcjcrVm5UZFczZzE0dlBwZzEyYnFxZlRXWjZ2WDQrUjVNSnVQTFgyaktLVk5rdW40ZDB2QlMvWTlXMnhWVlRzZmhHTGsva0I1ZDNHWEU0MVYrMHZiTm81ZXplemI3b291UEhuMjhxeWJsdENicnF4SnJUQzhWOHlQRjVmRGMxeU9UeUZQa1B3VGk4US9SZGl5NUVlQmJ5cTVxVzA1dXlyRVc5OHJ3WHpBNHM1WFc0WEVWdGpoRzNMc2xuSGFLNy9VMGZaNnBUc2ZGdFVxSGpFTy91djVrSmNkY2FqZzJYUWNvMDUzV002NVhqOG1XNHJqZno3dVRVbjBYQlIyeGpaK29HOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREpaZmRCM3pUcjBxa2xxNHZMOTFQeHordm9CckJEMnFQVTExbnJ0cHZqM2MrbjE3SFM1RmV5aTIxSnpjRW42b0NvSWUweDFnNHduSnp6ckZKWmFYbjhQN0V1VkNOZGMxR2N1cExWUlM3NTcvMHdMZ2hMbFJpM211ZUlwYnZDeERQcjMveGtuek9UcFJmR0ViSEtNSG1jZnl2SFlEV0NQTGs0OE8rVVcwMVhKcHJ5N0NISVUyMTA3SXkxMlNrbG1TL1FDd0pSdmhQcGE1ZlVXVmp5WDZuTnZJaFRmWEd5Y0lRbEdUeko0N3ByKzJCY0dhUElkOXM0Y2UycHFNWXZiRzNqdGxkbXZSRTFmeWZZWTM1cWxPeFExanEwbHMwdS9mdjRnYlFZN09ZOFVPcEo3dU8rMzVVNUpmWEwvWm1pdXh6c3VpOFloUFZmK1UvNUFvQ1Yxa3ExRlFTYzV5MWpudzlmOEpuemV5cXF5ZHpoSlJqdG1DYStQbUJZR2JxY2l2U2RxcjBrMUZ4aW5tT2V5NytmZjRIRmZNZUwzYWt0SExUSDVrbTE5Y3I5MEJzQkhpMldXMEtWcWlwN1NpMUh3N05yK0N3QUFBQUFBSXg0dFN1c3RsQ0VweWttbTRySzdKWXo4aXdBeit6UzJ4MVB1dCtwcHIzem5QajZaN25ObkQzdHNzVmpVcEphOXZ3dnQzL1pmUTFBRE5idzRXUXFpbEJ1cGF4M2hzc2ZENUhVZU9veHBTY1YwNU9XSXh3bmxOZUhsNGx3Qmt0NE1MTHBXWXF6UEcyOWFrL1RzL0w5ejdmeFoySzZNTHRJMnIzbHJudmpIYnY2WU5RQTR1cjYxRmxXY2J4Y2MrbVVUaFZLRStyYloxSEdMU3hESGJ6K0w3SXVBTTNFcTE2bHJUanZKdU1YK1dPZi9yK1paMTV2aGJuOE1aUng4V3Y2T3dCd3E4WHp0eitLTVk0K0RmOEFaTmNmSEZxcDIvNjlPK1BIVnAvd1hBRUpjV3YzdEZxNVRqT1Q4YzRsbi9maWZPamRHMnlWZHRhVTViWWxXM2pzbDZyME5BQWxaVEt4UE5qVFVsS0RTL0QyeDgvUDZpTmM1UW5HNmNacVN4aU1kVmo2c3FBTThlUFkzRldYYndnMDB0Y040OE12ei9ZK3g0dGZ1N3JaeG5LY1g0WXpMUDhBdndMZ0RpcXZwUWNjNXpLVXZxMi81T3dBUC8vWlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMjMzNTk0MTI4N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdyZWFjdC1pZC1zd2lwZXInO1xuXG5pbXBvcnQgJy4vQ291cnNlT25lLlN0eWxlcy5jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3N3aXBlci5jc3MnO1xuXG5pbXBvcnQgY291cnNlMSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvdXJzZS0xLTEuanBnJztcbmltcG9ydCBjb3Vyc2UyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY291cnNlLTEtMi5qcGcnO1xuaW1wb3J0IGNvdXJzZTMgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3Vyc2UtMS0zLmpwZyc7XG5pbXBvcnQgY291cnNlNCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvdXJzZS0xLTQuanBnJztcbmltcG9ydCBjb3Vyc2U1IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY291cnNlLTEtNS5qcGcnO1xuaW1wb3J0IGNvdXJzZTYgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3Vyc2UtMS02LmpwZyc7XG5cbmltcG9ydCB0ZWFtMSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL3RlYW0tMS0xLmpwZyc7XG5pbXBvcnQgdGVhbTIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy90ZWFtLTEtMi5qcGcnO1xuaW1wb3J0IHRlYW0zIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVhbS0xLTMuanBnJztcbmltcG9ydCB0ZWFtNCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL3RlYW0tMS00LmpwZyc7XG5pbXBvcnQgdGVhbTUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy90ZWFtLTEtNS5qcGcnO1xuaW1wb3J0IHRlYW02IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVhbS0xLTYuanBnJztcblxuY29uc3QgQ291cnNlT25lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1BvcHBpbnMsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzYlJyxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2NrLXRpdGxlX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBFeHBsb3JlIG91ciA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhciBjb3Vyc2VzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY291cnNlLW9uZSBjb3Vyc2Utb25lX190ZWFjaGVyLWRldGFpbHMgaG9tZS1vbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2Nhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyIHsuLi5wYXJhbXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTF9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2ZWxvcG1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19hZG1pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbTF9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IDxhIGhyZWY9XCIvdGVhY2hlci1kZXRhaWxzXCI+TG91IEd1ZXJyZXJvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+TmV3IHJlYWN0IGJvb3RjYW1wPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvdW50XCI+NC44PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy1jb3VudFwiPjI1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX21ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCIgLz4gMTAgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZm9sZGVyLW9wZW5cIiAvPiA2IExlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPiQxODwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgJiBTb2Z0d2FyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2FkbWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtMn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnkgPGEgaHJlZj1cIi90ZWFjaGVyLWRldGFpbHNcIj5Db3JhIERpYXo8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY291cnNlLWRldGFpbHNcIj5JbXByb3ZlIGVkaXRpbmcgc2tpbGxzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvdW50XCI+NC44PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy1jb3VudFwiPjI1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX21ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCIgLz4gMTAgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZm9sZGVyLW9wZW5cIiAvPiA2IExlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPiQxODwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTN9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW0zfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSA8YSBocmVmPVwiL3RlYWNoZXItZGV0YWlsc1wiPlJ1dGggQmVja2VyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+TWFya2V0aW5nIHN0cmF0ZWdpZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY291bnRcIj40Ljg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzLWNvdW50XCI+MjUwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2xvY2tcIiAvPiAxMCBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY291cnNlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1mb2xkZXItb3BlblwiIC8+IDYgTGVjdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+JDE4PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbm9uZVwiIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fc2luZ2xlIGNvbG9yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y291cnNlNH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtaGVhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2FkbWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtNH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnkgPGEgaHJlZj1cIi90ZWFjaGVyLWRldGFpbHNcIj5Fcm5lc3QgUm9kcmlxdWV6PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+QmFzaWNzIG9mIHBob3RvZ3JhcGh5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvdW50XCI+NC44PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy1jb3VudFwiPjI1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX21ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCIgLz4gMTAgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZm9sZGVyLW9wZW5cIiAvPiA2IExlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPiQxODwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTV9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW01fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSA8YSBocmVmPVwiL3RlYWNoZXItZGV0YWlsc1wiPklzYWJlbGxhIFN0YW5sZXk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY291cnNlLWRldGFpbHNcIj5BZmZpbGlhdGUgYm9vdGNhbXA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY291bnRcIj40Ljg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzLWNvdW50XCI+MjUwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2xvY2tcIiAvPiAxMCBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY291cnNlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1mb2xkZXItb3BlblwiIC8+IDYgTGVjdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+JDE4PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbm9uZVwiIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fc2luZ2xlIGNvbG9yLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y291cnNlNn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtaGVhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFsdGggJiBGaXRuZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW02fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSA8YSBocmVmPVwiL3RlYWNoZXItZGV0YWlsc1wiPkthdGhlcmluZSBDb2xsaW5zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+SGVhbHRoeSB3b3Jrb3V0IHRpcHMgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvdW50XCI+NC44PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy1jb3VudFwiPjI1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX21ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCIgLz4gMTAgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZm9sZGVyLW9wZW5cIiAvPiA2IExlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPiQxODwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTF9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2ZWxvcG1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19hZG1pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVhbTF9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IDxhIGhyZWY9XCIvdGVhY2hlci1kZXRhaWxzXCI+TG91IEd1ZXJyZXJvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+TmV3IHJlYWN0IGJvb3RjYW1wPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvdW50XCI+NC44PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy1jb3VudFwiPjI1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX21ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCIgLz4gMTAgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZm9sZGVyLW9wZW5cIiAvPiA2IExlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPiQxODwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgJiBTb2Z0d2FyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2FkbWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtMn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnkgPGEgaHJlZj1cIi90ZWFjaGVyLWRldGFpbHNcIj5Db3JhIERpYXo8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY291cnNlLWRldGFpbHNcIj5JbXByb3ZlIGVkaXRpbmcgc2tpbGxzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2NvdW50XCI+NC44PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19zdGFycy1jb3VudFwiPjI1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX21ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCIgLz4gMTAgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZm9sZGVyLW9wZW5cIiAvPiA2IExlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb3Vyc2UtZGV0YWlsc1wiPiQxODwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3NpbmdsZSBjb2xvci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvdXJzZTN9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNub25lXCIgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fYWRtaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RlYW0zfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSA8YSBocmVmPVwiL3RlYWNoZXItZGV0YWlsc1wiPlJ1dGggQmVja2VyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb3Vyc2Utb25lX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+TWFya2V0aW5nIHN0cmF0ZWdpZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fY291bnRcIj40Ljg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX3N0YXJzLWNvdW50XCI+MjUwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLW9uZV9fbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2xvY2tcIiAvPiAxMCBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY291cnNlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1mb2xkZXItb3BlblwiIC8+IDYgTGVjdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvdXJzZS1kZXRhaWxzXCI+JDE4PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbm9uZVwiIGNsYXNzTmFtZT1cImNvdXJzZS1vbmVfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VPbmU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEZvb3RlclN0eWxlcyA9IHN0eWxlZC5mb290ZXJgXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAuaGVhcnQge1xuICAgICAgICBjb2xvcjogI2ZmNzg3MDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmY3ODcwO1xuICAgIH1cbmA7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2Nyb2xsVG9wQXJyb3cgZnJvbSAnLi4vU2Nyb2xsVG9wQXJyb3cvU2Nyb2xsVG9wQXJyb3cnO1xuaW1wb3J0IHsgRm9vdGVyU3R5bGVzIH0gZnJvbSAnLi9Gb290ZXIuU3R5bGVzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9vdGVyU3R5bGVzIHN0eWxlPXt7IG1hcmdpblRvcDogJzIwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcG1lbnQgYnl7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vcXVvY3RydW5nMTYzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvY3RydW5nMTYzXG4gICAgICAgICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAgICAgICB3aXRoIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0IGhlYXJ0XCIgLz4gJmNvcHk7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvb3RlclN0eWxlcz5cbiAgICAgICAgICAgIDxTY3JvbGxUb3BBcnJvdyAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJTdHlsZXMgPSBzdHlsZWQuaGVhZGVyYFxuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAubG92ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDNyZW07XG4gICAgICAgIGJvdHRvbTogM3JlbTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgJi1jb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjI2LCA0NSwgNzIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGNsaWNrZWQgMC4wNXMgZm9yd2FyZHMgYWx0ZXJuYXRlIDEgbGluZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYtaGVhcnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGxvdmVGbHkgMC4yNXMgZm9yd2FyZHMgMSBsaW5lYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBsb3ZlRmx5IHtcbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcmVtKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBjbGlja2VkIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICAgIG1heC13aWR0aDogNzVweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG4gICAgLmhlYWRpbmcge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogIzVlNmI3OTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAuaGVhZGluZyBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFhYmNmNCwgIzVkZWZiOCk7XG4gICAgfVxuICAgIC5zbG9nYW4ge1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgIG1heC13aWR0aDogNDByZW07XG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDA7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cbiAgICAuY29udGFjdC1tZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDNyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE5NDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzc4NGJhMCwgIzJiODZjNSk7XG4gICAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGaWx0ZXJTdHlsZXMgfSBmcm9tICcuLi8uLi9zdHlsZXMvRmlsdGVyLlN0eWxlcyc7XG5pbXBvcnQgeyBIZWFkZXJTdHlsZXMgfSBmcm9tICcuL0hlYWRlci5TdHlsZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoe1xuICAgIGxvZ291dCxcbiAgICBhdXRoLFxuICAgIGNsYXNzTmFtZUhvbWUsXG4gICAgY2xhc3NOYW1lRGFzaGJvYXJkLFxuICAgIGNsYXNzTmFtZVVzZXJzLFxuICAgIGNsYXNzTmFtZUNvdXJzZSxcbiAgICBjbGFzc05hbWVDYXRlZ29yeSxcbiAgICBjbGFzc05hbWVFbnJvbGwsXG4gICAgY2xhc3NNeUNvdXJzZXMsXG4gICAgY2xhc3NBZGRDb3Vyc2UsXG4gICAgY2xhc3NBZGRMZWN0dXJlLFxuICAgIGNsYXNzQWxsQ291cnNlcyxcbiAgICBjbGFzc1Byb2ZpbGUsXG4gICAgY2xhc3NBbGxQcm9maWxlLFxuICAgIGNsYXNzTmFtZUxvZ2luLFxuICAgIGNsYXNzTmFtZUluc3RydWN0b3IsXG59OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlclN0eWxlcz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2s8c3Ryb25nPkRldjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbG9nYW5cIj5TaGFyZSBhbGwga25vd2xlZGdlIHdlIGhhdmUgd2l0aCDwn5iYPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9IZWFkZXJTdHlsZXM+XG4gICAgICAgICAgICB7YXV0aD8udXNlcnM/LnJvbGUgPT09ICdhZG1pbicgPyAoXG4gICAgICAgICAgICAgICAgPEZpbHRlclN0eWxlcz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZUhvbWV9PkhvbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZURhc2hib2FyZH0+RGFzaEJvYXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FsbHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZVVzZXJzfT5Vc2Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9TaG93Q291cnNlTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVDb3Vyc2V9PkNvdXJzZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvU2hvd0NhdGVnb3J5TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVDYXRlZ29yeX0+Q2F0ZWdvcmllczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9FbnJvbGxtZW50TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVFbnJvbGx9PkVucm9sbGVkIFVzZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiXCIgb25DbGljaz17bG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9GaWx0ZXJTdHlsZXM+XG4gICAgICAgICAgICApIDogYXV0aC51c2Vycy5yb2xlID09PSAnaW5zdHJ1Y3RvcicgPyAoXG4gICAgICAgICAgICAgICAgPEZpbHRlclN0eWxlcz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZUhvbWV9PkhvbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Avc2VydmljZXMvJHthdXRoLnVzZXJzLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc015Q291cnNlc30+TXkgQ291cnNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hZGRjb3Vyc2UvJHthdXRoLnVzZXJzLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0FkZENvdXJzZX0+QWRkIENvdXJzZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYWRkLWxlY3R1cmUvJHthdXRoLnVzZXJzLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0FkZExlY3R1cmV9PkFkZCBMZWN0dXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlcnZpY2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzQWxsQ291cnNlc30+QWxsIENvdXJzZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvZmluYWxkYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NQcm9maWxlfT5Qcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2ZpbmFscHJvZmlsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NBbGxQcm9maWxlfT5BbGwgUHJvZmlsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJcIiBvbkNsaWNrPXtsb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1cIj5Mb2dvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0ZpbHRlclN0eWxlcz5cbiAgICAgICAgICAgICkgOiBhdXRoLnVzZXJzLnJvbGUgPT09ICdzdHVkZW50JyA/IChcbiAgICAgICAgICAgICAgICA8RmlsdGVyU3R5bGVzPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lSG9tZX0+SG9tZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9zZXJ2aWNlc2ZvcnN0dWRlbnQvJHthdXRoLnVzZXJzLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc015Q291cnNlc30+TXkgQ291cnNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0FsbENvdXJzZXN9PkFsbCBDb3Vyc2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiXCIgb25DbGljaz17bG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9GaWx0ZXJTdHlsZXM+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxGaWx0ZXJTdHlsZXM+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVIb21lfT5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luL3N0dWRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lTG9naW59PkxvZ2luPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyL2luc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lSW5zdHJ1Y3Rvcn0+VGVhY2ggT24gU25hY2tEZXY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0ZpbHRlclN0eWxlcz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEyMzM1OTQxMDc4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgJy4vSW50cm9kdWN0aW9uLlN0eWxlcy5jc3MnO1xuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW3N0YXJ0Q291bnRlciwgc2V0U3RhcnRDb3VudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9IChpc1Zpc2libGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBzZXRTdGFydENvdW50ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXQtdHdvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay10aXRsZSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2NrLXRpdGxlX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byBvbmxpbmUgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWFybmluZyBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dC10d29fX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBsb3JlbSBpcHN1bSBhdmFpbGFibGUgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtIGJ5IGluamVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh1bW91ciBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbnQgbG9vay5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10d29fX3NpbmdsZS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19zaW5nbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19zaW5nbGUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhZCBmYS1ncmFkdWF0aW9uLWNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19zaW5nbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXR3b19fc2luZ2xlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgbGVhcm5pbmcgZnJvbSBvdXIgZXhwZXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10d29fX3NpbmdsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10d29fX3NpbmdsZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFkIGZhLWxpZ2h0YnVsYi1vblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19zaW5nbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXR3b19fc2luZ2xlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5oYW5jZSB5b3VyIHNraWxscyB3aXRoIHVzIG5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25vbmVcIiBjbGFzc05hbWU9XCJ0aG0tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC14bC1lbmQganVzdGlmeS1jb250ZW50LXNtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10d29fX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19pbWFnZS1kb3RzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAlICFpbXBvcnRhbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAwMC8xMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdHdvX19jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXR3b19fY291bnQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJ1c3RlZCBieVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblZpc2liaWxpdHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17eyB0b3A6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5ZWRDYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBlbmQ9e3N0YXJ0Q291bnRlciA/IDQ4OTAgOiAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRyb2R1Y3Rpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBMaW5rQ3VzdG9tLCBMaW5rQ3VzdG9tQWN0aXZlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0xpbmtDdXN0b20uU3R5bGVzJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL0Zvcm0uU3R5bGVzLmNzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcm9sZVBhcmFtczogc3RyaW5nO1xuICAgIGNsaWNrU3VibWl0OiAoZTogRm9ybUV2ZW50KSA9PiB2b2lkO1xuICAgIGhhbmRsZUNoYW5nZTogKG5hbWU6IGFueSkgPT4gKGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gICAgdmFsdWVzOiBVc2VyO1xufVxuXG5jb25zdCBMb2dpbiA9ICh7IHJvbGVQYXJhbXMsIGNsaWNrU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcyB9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLXNpZ25pblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZ3VyLmNvbS9hSUxQM0NELnBuZ1wiIGFsdD1cImxvZ2luXCIgY2xhc3NOYW1lPVwic2lnbnVwLXNpZ25pbi1pbWFnZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1zaWduaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDdXN0b20gdG89e2AvcmVnaXN0ZXIvJHtyb2xlUGFyYW1zfWB9PlNpZ24gdXA8L0xpbmtDdXN0b20+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1pdGVtIGlzLWFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDdXN0b21BY3RpdmUgdG89e2AvbG9naW4vJHtyb2xlUGFyYW1zfWB9PlNpZ24gaW48L0xpbmtDdXN0b21BY3RpdmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdudXAtc2lnbmluLWhlYWRpbmdcIj5TaWduIGluPC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lnbnVwLXNpZ25pbi1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2NsaWNrU3VibWl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBqb2huZG9lQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKioqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBzaWdudXAtc2lnbmluLXRlcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJzaWdudXAtc2lnbmluLXRlcm0tbGlua1wiIHRvPVwiL3JlZ2lzdGVyL3N0dWRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwIChzdHVkZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgeycgLyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwic2lnbnVwLXNpZ25pbi10ZXJtLWxpbmtcIiB0bz1cIi9yZWdpc3Rlci9pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiB1cCAoaW5zdHJ1Y3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tLWdyYWRpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEyMzM1OTQxNDkyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3JlYWN0LWlkLXN3aXBlcic7XG5cbmltcG9ydCAnLi9QYXJ0bmVycy5TdHlsZXMuY3NzJztcblxuaW1wb3J0IGltZzEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLWRpcmVjdGkucG5nJztcbmltcG9ydCBpbWcyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby1nb2play5wbmcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLW1ha2UtbXktdHJpcC5wbmcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLW1pY3Jvc29mdC5wbmcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXBheXRtLnBuZyc7XG5pbXBvcnQgaW1nNiBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tc3dpZ2d5LnBuZyc7XG5pbXBvcnQgaW1nNyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tem9tYXRvLnBuZyc7XG5cbmNvbnN0IFBhcnRuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJyYW5kLXR3b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9jay10aXRsZV9fdGl0bGVcIj5PdXIgc3R1ZGVudHMgd29yayBhdDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1vbmVfX2Nhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXIgey4uLnBhcmFtc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nMX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZzJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWczfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nNH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZzV9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWc2fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nN30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRuZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgTGlua0N1c3RvbSwgTGlua0N1c3RvbUFjdGl2ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9MaW5rQ3VzdG9tLlN0eWxlcyc7XG5cbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9Gb3JtLlN0eWxlcy5jc3MnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHJvbGVQYXJhbXM6IHN0cmluZztcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IChzdHI6IHN0cmluZykgPT4gc3RyaW5nO1xuICAgIGNsaWNrU3VibWl0OiAoZTogYW55KSA9PiB2b2lkO1xuICAgIGhhbmRsZUNoYW5nZTogKG5hbWU6IGFueSkgPT4gKGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gICAgdmFsdWVzOiBVc2VyO1xufVxuXG5jb25zdCBSZWdpc3RlciA9ICh7XG4gICAgcm9sZVBhcmFtcyxcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG4gICAgY2xpY2tTdWJtaXQsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIHZhbHVlcyxcbn06IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtc2lnbmluXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1ndXIuY29tL2FJTFAzQ0QucG5nXCIgYWx0PVwibG9naW5cIiBjbGFzc05hbWU9XCJzaWdudXAtc2lnbmluLWltYWdlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLXNpZ25pbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1pdGVtIGlzLWFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDdXN0b21BY3RpdmUgdG89e2AvcmVnaXN0ZXIvJHtyb2xlUGFyYW1zfWB9PlNpZ24gdXA8L0xpbmtDdXN0b21BY3RpdmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0N1c3RvbSB0bz17YC9sb2dpbi8ke3JvbGVQYXJhbXN9YH0+U2lnbiBpbjwvTGlua0N1c3RvbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ251cC1zaWduaW4taGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBTaWduIHVwIHtgKGZvciAke3JvbGVQYXJhbXMgPyBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIocm9sZVBhcmFtcyl9YCA6ICcnfSlgfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ251cC1zaWduaW4tZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtjbGlja1N1Ym1pdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDogVHJ1bmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlyc3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdmaXJzdF9uYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IFBoYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2xhc3RfbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IHRydW5ncGhhbkBlbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmUtcGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwZWF0IHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQyJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmUtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBzaWdudXAtc2lnbmluLXRlcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJzaWdudXAtc2lnbmluLXRlcm0tbGlua1wiIHRvPXtgL2xvZ2luLyR7cm9sZVBhcmFtc31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tLWdyYWRpZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2Nyb2xsVG9wQXJyb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Nob3dTY3JvbGwsIHNldFNob3dTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsVG9wKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGxUb3ApO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hlY2tTY3JvbGxUb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPiA0MDApIHtcbiAgICAgICAgICAgIHNldFNob3dTY3JvbGwodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gNDAwKSB7XG4gICAgICAgICAgICBzZXRTaG93U2Nyb2xsKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb3B9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNob3dTY3JvbGwgPyAnZmxleCcgOiAnbm9uZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWwgZmEtYXJyb3ctdXBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wQXJyb3c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoL2VmZmVjdHMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5cbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoZ2V0QXV0aCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gICAgY29uc3QgY2hlY2tIb21lUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWUgPT09ICcvJztcbiAgICBjb25zdCBjaGVja0xvZ2luUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWU/LmluY2x1ZGVzKCdsb2dpbicpO1xuICAgIGNvbnN0IGNoZWNrSW5zdHJ1Y3RvclJvdXRlID0gbG9jYXRpb24/LnBhdGhuYW1lID09PSAnL3JlZ2lzdGVyL2luc3RydWN0b3InO1xuICAgIGNvbnN0IGNoZWNrRGFzaGJvYXJkUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkJztcbiAgICBjb25zdCBjaGVja1VzZXJzUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWUgPT09ICcvYWxsdXNlcnMnO1xuICAgIGNvbnN0IGNoZWNrQ291cnNlUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWUgPT09ICcvU2hvd0NvdXJzZUxpc3QnO1xuICAgIGNvbnN0IGNoZWNrQ2F0ZWdvcnlSb3V0ZSA9IGxvY2F0aW9uPy5wYXRobmFtZSA9PT0gJy9TaG93Q2F0ZWdvcnlMaXN0JztcbiAgICBjb25zdCBjaGVja0Vucm9sbFJvdXRlID0gbG9jYXRpb24/LnBhdGhuYW1lID09PSAnL0Vucm9sbG1lbnRMaXN0JztcbiAgICBjb25zdCBjaGVja015Q291cnNlc1JvdXRlID1cbiAgICAgICAgbG9jYXRpb24/LnBhdGhuYW1lPy5pbmNsdWRlcyhgL3NlcnZpY2VzLyR7YXV0aC51c2Vycy5pZH1gKSB8fFxuICAgICAgICBsb2NhdGlvbj8ucGF0aG5hbWU/LmluY2x1ZGVzKCcvc2VydmljZXNmb3JzdHVkZW50LycpO1xuICAgIGNvbnN0IENoZWNrQWRkY291cnNlUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWU/LmluY2x1ZGVzKCdhZGRjb3Vyc2UnKTtcbiAgICBjb25zdCBjaGVja0FkZExlY3R1cmVSb3V0ZSA9IGxvY2F0aW9uPy5wYXRobmFtZT8uaW5jbHVkZXMoJ2FkZC1sZWN0dXJlJyk7XG4gICAgY29uc3QgY2hlY2tBbGxDb3Vyc2VzUm91dGUgPSBsb2NhdGlvbj8ucGF0aG5hbWUgPT09ICcvc2VydmljZXMnO1xuICAgIGNvbnN0IGNoZWNrUHJvZmlsZVJvdXRlID0gbG9jYXRpb24/LnBhdGhuYW1lID09PSAnL2ZpbmFsZGFzaGJvYXJkJztcbiAgICBjb25zdCBjaGVja0FsbFByb2ZpbGVSb3V0ZSA9IGxvY2F0aW9uPy5wYXRobmFtZSA9PT0gJy9maW5hbHByb2ZpbGVzJztcblxuICAgIGNvbnN0IGFsbENsYXNzID0ge1xuICAgICAgICBjbGFzc05hbWVIb21lOiBgZmlsdGVyLWl0ZW0gJHtjaGVja0hvbWVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NOYW1lSW5zdHJ1Y3RvcjogYGZpbHRlci1pdGVtICR7Y2hlY2tJbnN0cnVjdG9yUm91dGUgPyAnYWN0aXZlJyA6ICcnfWAsXG4gICAgICAgIGNsYXNzTmFtZUxvZ2luOiBgZmlsdGVyLWl0ZW0gJHtjaGVja0xvZ2luUm91dGUgPyAnYWN0aXZlJyA6ICcnfWAsXG4gICAgICAgIGNsYXNzTmFtZURhc2hib2FyZDogYGZpbHRlci1pdGVtICR7Y2hlY2tEYXNoYm9hcmRSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NOYW1lVXNlcnM6IGBmaWx0ZXItaXRlbSAke2NoZWNrVXNlcnNSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NOYW1lQ291cnNlOiBgZmlsdGVyLWl0ZW0gJHtjaGVja0NvdXJzZVJvdXRlID8gJ2FjdGl2ZScgOiAnJ31gLFxuICAgICAgICBjbGFzc05hbWVDYXRlZ29yeTogYGZpbHRlci1pdGVtICR7Y2hlY2tDYXRlZ29yeVJvdXRlID8gJ2FjdGl2ZScgOiAnJ31gLFxuICAgICAgICBjbGFzc05hbWVFbnJvbGw6IGBmaWx0ZXItaXRlbSAke2NoZWNrRW5yb2xsUm91dGUgPyAnYWN0aXZlJyA6ICcnfWAsXG4gICAgICAgIGNsYXNzTXlDb3Vyc2VzOiBgZmlsdGVyLWl0ZW0gJHtjaGVja015Q291cnNlc1JvdXRlID8gJ2FjdGl2ZScgOiAnJ31gLFxuICAgICAgICBjbGFzc0FkZENvdXJzZTogYGZpbHRlci1pdGVtICR7Q2hlY2tBZGRjb3Vyc2VSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NBZGRMZWN0dXJlOiBgZmlsdGVyLWl0ZW0gJHtjaGVja0FkZExlY3R1cmVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NBbGxDb3Vyc2VzOiBgZmlsdGVyLWl0ZW0gJHtjaGVja0FsbENvdXJzZXNSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NQcm9maWxlOiBgZmlsdGVyLWl0ZW0gJHtjaGVja1Byb2ZpbGVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICAgICAgY2xhc3NBbGxQcm9maWxlOiBgZmlsdGVyLWl0ZW0gJHtjaGVja0FsbFByb2ZpbGVSb3V0ZSA/ICdhY3RpdmUnIDogJyd9YCxcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaWQnLCBKU09OLnN0cmluZ2lmeShhdXRoLnVzZXJzLmlkKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUm9sZScsIEpTT04uc3RyaW5naWZ5KGF1dGgudXNlcnMucm9sZSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ291dENsaWNrID0gKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKGxvZ291dFVzZXIoKCkgPT4gaGlzdG9yeT8ucHVzaCgnLycpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiA8SGVhZGVyIGxvZ291dD17bG9nb3V0Q2xpY2t9IGF1dGg9e2F1dGh9IHsuLi5hbGxDbGFzc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgaTE4bmV4dFhIUkJhY2tlbmQgZnJvbSAnaTE4bmV4dC14aHItYmFja2VuZCc7XG5pbXBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vc3RvcmUvYXBwL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBkZURFIGZyb20gJy4vbG9jYWxlcy9kZV9ERS90cmFuc2xhdGlvbi5qc29uJztcbmltcG9ydCBlblVTIGZyb20gJy4vbG9jYWxlcy9lbl9VUy90cmFuc2xhdGlvbi5qc29uJztcblxuaWYgKF9fQlJPV1NFUl9fKSB7XG4gICAgaTE4bmV4dC51c2UoaTE4bmV4dFhIUkJhY2tlbmQpO1xufVxuXG4vLyBpMThuZXh0LnVzZShfX0JST1dTRVJfXyA/IGkxOG5leHRYSFJCYWNrZW5kIDoge30pLmluaXQoe1xuaTE4bmV4dC5pbml0KHtcbiAgICBiYWNrZW5kOiB7XG4gICAgICAgIC8vIGZvciBhbGwgYXZhaWxhYmxlIG9wdGlvbnMgcmVhZCB0aGUgYmFja2VuZCdzIHJlcG9zaXRvcnkgcmVhZG1lIGZpbGVcbiAgICAgICAgbG9hZFBhdGg6ICcvbG9jYWxlcy97e2xuZ319L3t7bnN9fS5qc29uJyxcbiAgICB9LFxuICAgIHJlYWN0OiB7XG4gICAgICAgIC8vIE11c3QgYmUgZmFsc2UgdW50aWwgU3VzcGVuc2UgaXMgc3VwcG9ydGVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgICAgICB1c2VTdXNwZW5zZTogZmFsc2UsXG4gICAgICAgIHdhaXQ6IHRydWUsXG4gICAgfSxcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgX19CUk9XU0VSX18sXG4gICAgZmFsbGJhY2tMbmc6ICdlbl9VUycsXG4gICAgZmFsbGJhY2tOUzogWyd0cmFuc2xhdGlvbiddLFxuICAgIC8vIFRoaXMgb3B0aW9uIGlzIG5lY2Vzc2FyeSB0byB0ZWxsIGkxOG5leHQgdG8gdHJ5IGxvYWRpbmcgbWlzc2luZyByZXNvdXJjZXMgdmlhXG4gICAgLy8gaTE4bmV4dC14aHItYmFja2VuZCwgb3RoZXJ3aXNlIG5vIGNhbGxzIHdpbGwgYmUgbWFkZSBpZiByZXNvdXJjZXMgYXJlIGRlZmluZWQuXG4gICAgcGFydGlhbEJ1bmRsZWRMYW5ndWFnZXM6IHRydWUsXG4gICAgcmVzb3VyY2VzOiB7XG4gICAgICAgIGRlX0RFOiB7IHRyYW5zbGF0aW9uOiBkZURFIH0sXG4gICAgICAgIGVuX1VTOiB7IHRyYW5zbGF0aW9uOiBlblVTIH0sXG4gICAgfSxcbiAgICBwYXJzZU1pc3NpbmdLZXlIYW5kbGVyOiAobWlzc2luZzogYW55KSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBfX0JST1dTRVJfXykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdNSVNTSU5HIFRSQU5TTEFUSU9OOicsIG1pc3NpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaXNzaW5nO1xuICAgIH0sXG59KTtcblxuaTE4bmV4dC5sYW5ndWFnZXMgPSBbJ2RlX0RFJywgJ2VuX1VTJ107XG5cbmNvbnN0IEkxOE46IFJlYWN0LkZDPGFueT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgbG9jYWxlID0gdXNlU2VsZWN0b3IoZ2V0TG9jYWxlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKGxvY2FsZSk7XG4gICAgfSwgW2xvY2FsZV0pO1xuXG4gICAgcmV0dXJuIDxJMThuZXh0UHJvdmlkZXIgaTE4bj17aTE4bmV4dH0+e2NoaWxkcmVufTwvSTE4bmV4dFByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSTE4Tik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBzZXRMb2NhbGUgfSBmcm9tICdzdG9yZS9hcHAvYWN0aW9ucyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdzdG9yZS9hcHAvdHlwZXMnO1xuXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW50cm9kdWN0aW9uL0ludHJvZHVjdGlvbic7XG5pbXBvcnQgUGFydG5lcnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXJ0bmVycy9QYXJ0bmVycyc7XG5pbXBvcnQgQ291cnNlT25lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ291cnNlT25lL0NvdXJzZU9uZSc7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8YW55PiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUxvY2FsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9jYWxlKGUuY3VycmVudFRhcmdldC52YWx1ZSBhcyBMb2NhbGUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgW2Rpc3BhdGNoXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SW50cm9kdWN0aW9uIC8+XG4gICAgICAgICAgICA8Q291cnNlT25lIC8+XG4gICAgICAgICAgICA8UGFydG5lcnMgLz5cbiAgICAgICAgICAgIHsvKiA8aDI+e3QoJ2kxOG4tZXhhbXBsZScpfTwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiZGVfREVcIiBvbkNsaWNrPXtoYW5kbGVMb2NhbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICBEZXV0c2NoXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cImVuX1VTXCIgb25DbGljaz17aGFuZGxlTG9jYWxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBsb2dpblVzZXIgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoL2VmZmVjdHMnO1xuXG5pbXBvcnQgTG9naW5EdW1iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9naW4vTG9naW4nO1xuaW1wb3J0IHsgQ2VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3R5bGVzL0NlbnRlckNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IExvZ2luID0gKHsgbWF0Y2ggfTogYW55KSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgICBjb25zdCByb2xlUGFyYW1zID0gbWF0Y2gucGFyYW1zLnJvbGU7XG5cbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lOiBhbnkpID0+IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBbbmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgbG9naW5Vc2VyKFxuICAgICAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB0b2FzdChlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICgpID0+IGhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDZW50ZXJDb21wb25lbnQ+XG4gICAgICAgICAgICA8TG9naW5EdW1iXG4gICAgICAgICAgICAgICAgcm9sZVBhcmFtcz17cm9sZVBhcmFtc31cbiAgICAgICAgICAgICAgICBjbGlja1N1Ym1pdD17Y2xpY2tTdWJtaXR9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NlbnRlckNvbXBvbmVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aC9lZmZlY3RzJztcblxuaW1wb3J0IFJlZ2lzdGVyRHVtYiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyJztcbmltcG9ydCB7IENlbnRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3N0eWxlcy9DZW50ZXJDb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBSZWdpc3RlciA9ICh7IG1hdGNoIH06IGFueSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCByb2xlUGFyYW1zID0gbWF0Y2gucGFyYW1zLnJvbGU7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcGFzc3dvcmQyOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lOiBhbnkpID0+IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBbbmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IHZhbHVlcy5maXJzdF9uYW1lIHx8ICcnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiB2YWx1ZXMubGFzdF9uYW1lIHx8ICcnLFxuICAgICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCB8fCAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQgfHwgJycsXG4gICAgICAgICAgICBwYXNzd29yZDI6IHZhbHVlcy5wYXNzd29yZDIgfHwgJycsXG4gICAgICAgICAgICByb2xlOiByb2xlUGFyYW1zIHx8ICcnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgcmVnaXN0ZXJVc2VyKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgICAgICAgICAgICAgIChtZXNzYWdlOiBzdHJpbmcpID0+IHRvYXN0KG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgIChlcnI6IGFueSkgPT4gdG9hc3QoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKCkgPT4gaGlzdG9yeS5wdXNoKGAvbG9naW4vJHtyb2xlUGFyYW1zfWApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDZW50ZXJDb21wb25lbnQ+XG4gICAgICAgICAgICA8UmVnaXN0ZXJEdW1iXG4gICAgICAgICAgICAgICAgcm9sZVBhcmFtcz17cm9sZVBhcmFtc31cbiAgICAgICAgICAgICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI9e2NhcGl0YWxpemVGaXJzdExldHRlcn1cbiAgICAgICAgICAgICAgICBjbGlja1N1Ym1pdD17Y2xpY2tTdWJtaXR9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NlbnRlckNvbXBvbmVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBzZWN1cml0eS9kZXRlY3Qtb2JqZWN0LWluamVjdGlvbiAqL1xuY29uc3Qgcm91dGVzID0ge1xuICAgIGhvbWU6ICcvJyxcbiAgICBsb2dpbjogJy9sb2dpbi86cm9sZScsXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXIvOnJvbGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlID0gKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgIHJvdXRlc0NvbmZpZzogYW55ID0gcm91dGVzXG4pID0+XG4gICAgcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgocm91dGVCcmFuY2g6IGFueSwgcGF0aEl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocm91dGVCcmFuY2ggJiYgcm91dGVCcmFuY2hbcGF0aEl0ZW1dKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlQnJhbmNoW3BhdGhJdGVtXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbXMgfHwgdHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwYXJhbXMpLnJlZHVjZSgocmVwbGFjZWQsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZWQucmVwbGFjZShgOiR7a2V5fWAsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0sIHJvdXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUJyYW5jaFtwYXRoSXRlbV07XG4gICAgICAgIH1cbiAgICB9LCByb3V0ZXNDb25maWcpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzID0ge1xuICAgIFNFVExPQ0FMRTogJ2FwcC9zZXQtbG9jYWxlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMb2NhbGUgPSAobG9jYWxlOiBMb2NhbGUpID0+ICh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUTE9DQUxFLFxuICAgIHBheWxvYWQ6IGxvY2FsZSxcbn0pO1xuIiwiaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvbiwgQXBwU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IE9iamVjdC5mcmVlemU8QXBwU3RhdGU+KHtcbiAgICBsb2NhbGU6ICdlbl9VUycsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOiBBcHBTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBBcHBTdGF0ZSA9PlxuICAgIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlNFVExPQ0FMRToge1xuICAgICAgICAgICAgICAgIGRyYWZ0LmxvY2FsZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyBBcHBTdGF0ZSwgTG9jYWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSAoc3RhdGU6IHsgYXBwOiBBcHBTdGF0ZSB9KTogQXBwU3RhdGUgPT4gc3RhdGUuYXBwO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxlID0gY3JlYXRlU2VsZWN0b3IoW2FwcF0sIChhcHApOiBMb2NhbGUgPT4gYXBwLmxvY2FsZSk7XG4iLCJpbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlcyA9IHtcbiAgICBTRVRfQ1VSUkVOVF9VU0VSOiAnU0VUX0NVUlJFTlRfVVNFUicsXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSAoYXV0aDogQXV0aCkgPT4gKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfQ1VSUkVOVF9VU0VSLFxuICAgIHBheWxvYWQ6IGF1dGgsXG59KTtcbiIsImltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gJ3V0aWxzL3NldEF1dGhUb2tlbic7XG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL2F1dGgvYWN0aW9uJztcbmltcG9ydCBzZXREYXRhIGZyb20gJy4uLy4uL3V0aWxzL3NldERhdGEnO1xuaW1wb3J0IGNsZWFyRGF0YSBmcm9tICcuLi8uLi91dGlscy9jbGVhckRhdGEnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkaXNwYXRjaFNldEN1cnJlbnRVc2VyID0gKGRhdGE6IGFueSkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb24+KSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFVzZXIoZGF0YSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IChcbiAgICBkYXRhOiBhbnksXG4gICAgZG9uZUNiOiBGdW5jdGlvbixcbiAgICBlcnJvckNiOiBGdW5jdGlvbixcbiAgICBjbGVhcklucHV0OiBGdW5jdGlvbixcbiAgICByZWRpcmVjdFdoZW5TdWNjZXNzOiBGdW5jdGlvblxuKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbj4pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgICAgICBsZXQgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJy91c2Vycy9yZWdpc3RlcicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICAgICAgZG9uZUNiKCdSZWdpc3RlciBzdWNjZXNzZnVsbHkhIFRoYW5rIFlvdSA8MycpO1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0V2hlblN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgICAgICBlcnJvckNiKFxuICAgICAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5maXJzdF9uYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5sYXN0X25hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5yZXNwb25zZS5kYXRhLmVtYWlsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIucmVzcG9uc2UuZGF0YS5wYXNzd29yZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLnJlc3BvbnNlLmRhdGEucGFzc3dvcmQyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKFxuICAgIGRhdGE6IGFueSxcbiAgICBlcnJvckNiOiBGdW5jdGlvbixcbiAgICBjbGVhcklucHV0OiBGdW5jdGlvbixcbiAgICByZWRpcmVjdFdoZW5TdWNjZXNzOiBGdW5jdGlvblxuKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbj4pID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgbGV0IGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnL3VzZXJzL2xvZ2luJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICB9O1xuXG4gICAgYXhpb3MoY29uZmlnKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0VG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgLy8gRGVjb2RlIHRva2VuIHRvIGdldCB1c2VyIGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3REZWNvZGUodG9rZW4pO1xuICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgdXNlclxuICAgICAgICAgICAgc2V0RGF0YShkaXNwYXRjaCwgZGVjb2RlZCk7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICByZWRpcmVjdFdoZW5TdWNjZXNzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICBlcnJvckNiKGVyci5yZXNwb25zZS5kYXRhLmVtYWlsIHx8IGVyci5yZXNwb25zZS5kYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IChyZWRpcmVjdFdoZW5TdWNjZXNzOiBGdW5jdGlvbikgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb24+KSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2p3dFRva2VuJyk7XG4gICAgLy8gUmVtb3ZlIGF1dGggaGVhZGVyIGZyb20gZnV0dXJlIHJlcXVlc3RzXG4gICAgc2V0QXV0aFRva2VuKGZhbHNlKTtcbiAgICAvLyBTZXQgY3VycmVudCB1c2VyIHRvIHt9IHdoaWNoIHdpbGxcbiAgICBjbGVhckRhdGEoZGlzcGF0Y2gsIHt9KTtcbiAgICByZWRpcmVjdFdoZW5TdWNjZXNzKCk7XG59O1xuIiwiaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ3ZhbGlkYXRpb24vaXNFbXB0eSc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IEFjdGlvbiwgQXV0aFN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSBPYmplY3QuZnJlZXplPEF1dGhTdGF0ZT4oe1xuICAgIGF1dGg6IHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgdXNlcnM6IHt9LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOiBBdXRoU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogQXV0aFN0YXRlID0+XG4gICAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfVVNFUjoge1xuICAgICAgICAgICAgICAgIGRyYWZ0LmF1dGguaXNBdXRoZW50aWNhdGVkID0gIWlzRW1wdHkoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmF1dGgudXNlcnMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgQXV0aFN0YXRlLCBBdXRoIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gKHN0YXRlOiB7IGF1dGg6IEF1dGhTdGF0ZSB9KTogQXV0aFN0YXRlID0+IHN0YXRlLmF1dGg7XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRoID0gY3JlYXRlU2VsZWN0b3IoW2F1dGhdLCAoYXV0aCk6IEF1dGggPT4gYXV0aC5hdXRoKTtcbiIsImltcG9ydCB7IEVycm9ycyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgRXJyb3JzVHlwZXMgPSB7XG4gICAgR0VUX0VSUk9SUzogJ0dFVF9FUlJPUlMnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEVycm9ycyA9IChlcnJvcnM6IEVycm9ycykgPT4gKHtcbiAgICB0eXBlOiBFcnJvcnNUeXBlcy5HRVRfRVJST1JTLFxuICAgIHBheWxvYWQ6IGVycm9ycyxcbn0pO1xuIiwiaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcbmltcG9ydCB7IEVycm9yc1R5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IHsgQWN0aW9uLCBFcnJvcnNTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gT2JqZWN0LmZyZWV6ZTxFcnJvcnNTdGF0ZT4oe1xuICAgIGVycm9yczoge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOiBFcnJvcnNTdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBFcnJvcnNTdGF0ZSA9PlxuICAgIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEVycm9yc1R5cGVzLkdFVF9FUlJPUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSwgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcblxudHlwZSBIaXN0b3J5UGFyYW1zID0ge1xuICAgIGluaXRpYWxFbnRyaWVzPzogYW55W107XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVW5pdmVyc2FsSGlzdG9yeSA9ICh7IGluaXRpYWxFbnRyaWVzID0gW10gfTogSGlzdG9yeVBhcmFtcyA9IHt9KSA9PiB7XG4gICAgaWYgKF9fQlJPV1NFUl9fKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB3aW5kb3cuYnJvd3Nlckhpc3RvcnkgfHwgY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmICF3aW5kb3cuYnJvd3Nlckhpc3RvcnkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5icm93c2VySGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXMgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbml2ZXJzYWxIaXN0b3J5O1xuIiwiaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcic7XG5cbnR5cGUgU3RvcmVQYXJhbXMgPSB7XG4gICAgaW5pdGlhbFN0YXRlPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBtaWRkbGV3YXJlPzogYW55W107XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJlU3RvcmUgPSAoeyBpbml0aWFsU3RhdGUsIG1pZGRsZXdhcmUgPSBbXSB9OiBTdG9yZVBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRldnRvb2xzID1cbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7IGFjdGlvbnNCbGFja2xpc3Q6IFtdIH0pO1xuXG4gICAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGRldnRvb2xzIHx8IGNvbXBvc2U7XG5cbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgICBjcmVhdGVSb290UmVkdWNlcigpLFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKC4uLlt0aHVua10uY29uY2F0KC4uLm1pZGRsZXdhcmUpKSlcbiAgICApO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3Jvb3RSZWR1Y2VyJywgKCkgPT5cbiAgICAgICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihyZXF1aXJlKCcuL3Jvb3RSZWR1Y2VyJykuZGVmYXVsdClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsImltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzID0ge1xuICAgIEdFVF9QUk9GSUxFOiAnR0VUX1BST0ZJTEUnLFxuICAgIEdFVF9QUk9GSUxFUzogJ0dFVF9QUk9GSUxFUycsXG4gICAgUFJPRklMRV9MT0FESU5HOiAnUFJPRklMRV9MT0FESU5HJyxcbiAgICBDTEVBUl9DVVJSRU5UX1BST0ZJTEU6ICdDTEVBUl9DVVJSRU5UX1BST0ZJTEUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAocHJvZmlsZTogUHJvZmlsZSkgPT4gKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5HRVRfUFJPRklMRSxcbiAgICBwYXlsb2FkOiBwcm9maWxlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlcyA9IChwcm9maWxlczogYW55KSA9PiAoe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkdFVF9QUk9GSUxFUyxcbiAgICBwYXlsb2FkOiBwcm9maWxlcyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvZmlsZUxvYWRpbmcgPSAoKSA9PiAoe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0ZJTEVfTE9BRElORyxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJDdXJyZW50UHJvZmlsZSA9ICgpID0+ICh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQ0xFQVJfQ1VSUkVOVF9QUk9GSUxFLFxufSk7XG4iLCJpbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciB9IGZyb20gJ3N0b3JlL2F1dGgvYWN0aW9uJztcbmltcG9ydCB7IGdldFByb2ZpbGUsIGdldFByb2ZpbGVzLCBzZXRQcm9maWxlTG9hZGluZyB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IEFjdGlvbiwgUHJvZmlsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZXJyb3JSZXNwb25zZSA9IChlcnJEYXRhOiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IGVyclJlcyA9XG4gICAgICAgIGVyckRhdGE/LmhhbmRsZSB8fFxuICAgICAgICBlcnJEYXRhPy5zdGF0dXMgfHxcbiAgICAgICAgZXJyRGF0YT8uc2tpbGxzIHx8XG4gICAgICAgIGVyckRhdGE/LndlYnNpdGUgfHxcbiAgICAgICAgZXJyRGF0YT8ueW91dHViZSB8fFxuICAgICAgICBlcnJEYXRhPy50d2l0dGVyIHx8XG4gICAgICAgIGVyckRhdGE/LmZhY2Vib29rIHx8XG4gICAgICAgIGVyckRhdGE/LmxpbmtlZGluIHx8XG4gICAgICAgIGVyckRhdGE/Lmluc3RhZ3JhbSB8fFxuICAgICAgICAnJztcbiAgICByZXR1cm4gZXJyUmVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRQcm9maWxlID0gKCkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb24+KSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UHJvZmlsZUxvYWRpbmcoKSk7XG4gICAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIHVybDogJy9hcGkvcHJvZmlsZScsXG4gICAgfTtcblxuICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0UHJvZmlsZShyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKF9lcnIpID0+IGRpc3BhdGNoKGdldFByb2ZpbGUoe30gYXMgUHJvZmlsZSkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9maWxlID0gKFxuICAgIGRhdGE6IGFueSxcbiAgICBlcnJvckNiOiBGdW5jdGlvbixcbiAgICBkb25lQ2I6IEZ1bmN0aW9uLFxuICAgIGNsZWFySW5wdXQ6IEZ1bmN0aW9uLFxuICAgIHJlZGlyZWN0V2hlblN1Y2Nlc3M6IEZ1bmN0aW9uXG4pID0+IChfZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbj4pID0+IHtcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJy9hcGkvcHJvZmlsZScsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgfTtcblxuICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oKF9yZXMpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIGRvbmVDYignQ3JlYXRlIHByb2ZpbGUgc3VjY2Vzc2Z1bGx5ISA8MycpO1xuICAgICAgICAgICAgcmVkaXJlY3RXaGVuU3VjY2VzcygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgZXJyb3JDYihlcnJvclJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEV4cGVyaWVuY2UgPSAoXG4gICAgZGF0YTogYW55LFxuICAgIGVycm9yQ2I6IEZ1bmN0aW9uLFxuICAgIGRvbmVDYjogRnVuY3Rpb24sXG4gICAgY2xlYXJJbnB1dDogRnVuY3Rpb24sXG4gICAgcmVkaXJlY3RXaGVuU3VjY2VzczogRnVuY3Rpb25cbikgPT4gKF9kaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9uPikgPT4ge1xuICAgIGNvbnN0IGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnL2FwaS9wcm9maWxlL2V4cGVyaWVuY2UnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgIH07XG5cbiAgICBheGlvcyhjb25maWcpXG4gICAgICAgIC50aGVuKChfcmVzKSA9PiB7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICBkb25lQ2IoJ0FkZCBFeHBlcmllbmNlIFN1Y2Nlc3NmdWxseSEgPDMnKTtcbiAgICAgICAgICAgIHJlZGlyZWN0V2hlblN1Y2Nlc3MoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIGVycm9yQ2IoZXJyb3JSZXNwb25zZShlcnIucmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFZHVjYXRpb24gPSAoXG4gICAgZGF0YTogYW55LFxuICAgIGVycm9yQ2I6IEZ1bmN0aW9uLFxuICAgIGRvbmVDYjogRnVuY3Rpb24sXG4gICAgY2xlYXJJbnB1dDogRnVuY3Rpb24sXG4gICAgcmVkaXJlY3RXaGVuU3VjY2VzczogRnVuY3Rpb25cbikgPT4gKF9kaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9uPikgPT4ge1xuICAgIGNvbnN0IGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnL2FwaS9wcm9maWxlL2VkdWNhdGlvbicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgfTtcblxuICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oKF9yZXMpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIGRvbmVDYignQWRkIEVkdWNhdGlvbiBTdWNjZXNzZnVsbHkhIDwzJyk7XG4gICAgICAgICAgICByZWRpcmVjdFdoZW5TdWNjZXNzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgICAgICBlcnJvckNiKGVycm9yUmVzcG9uc2UoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRXhwZXJpZW5jZSA9IChpZDogc3RyaW5nLCBlcnJvckNiOiBGdW5jdGlvbiwgZG9uZUNiOiBGdW5jdGlvbikgPT4gKFxuICAgIGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb24+XG4pID0+IHtcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgICAgdXJsOiBgL2FwaS9wcm9maWxlL2VkdWNhdGlvbi8ke2lkfWAsXG4gICAgfTtcblxuICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0UHJvZmlsZShyZXMuZGF0YSkpO1xuICAgICAgICAgICAgZG9uZUNiKCdEZWxldGUgU3VjY2Vzc2Z1bGx5ISA8MycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZXJyb3JDYihlcnJvclJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUVkdWNhdGlvbiA9IChpZDogc3RyaW5nLCBlcnJvckNiOiBGdW5jdGlvbiwgZG9uZUNiOiBGdW5jdGlvbikgPT4gKFxuICAgIGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb24+XG4pID0+IHtcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgICAgdXJsOiBgL2FwaS9wcm9maWxlL2VkdWNhdGlvbi8ke2lkfWAsXG4gICAgfTtcblxuICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0UHJvZmlsZShyZXMuZGF0YSkpO1xuICAgICAgICAgICAgZG9uZUNiKCdEZWxldGUgU3VjY2Vzc2Z1bGx5ISA8MycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZXJyb3JDYihlcnJvclJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKSkpO1xufTtcblxuLy8gR2V0IGFsbCBwcm9maWxlc1xuZXhwb3J0IGNvbnN0IGdldEFsbFByb2ZpbGVzID0gKGVycm9yQ2I6IEZ1bmN0aW9uKSA9PiBhc3luYyAoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbj4pID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChzZXRQcm9maWxlTG9hZGluZygpKTtcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiAnL2FwaS9wcm9maWxlL2FsbCcsXG4gICAgfTtcblxuICAgIGF3YWl0IGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0UHJvZmlsZXMocmVzLmRhdGEpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChfZXJyKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChnZXRQcm9maWxlcyhudWxsKSk7XG4gICAgICAgICAgICBlcnJvckNiKCdFcnJvciBzb21ldGhpbmcgd2hlbiBnZXQgYWxsIHByb2ZpbGVzJyk7XG4gICAgICAgIH0pO1xufTtcblxuLy8gRGVsZXRlIGFjY291bnQgJiBwcm9maWxlXG5leHBvcnQgY29uc3QgZGVsZXRlQWNjb3VudCA9IChkb25lQ2I6IEZ1bmN0aW9uLCBlcnJvckNiOiBGdW5jdGlvbikgPT4gKFxuICAgIGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb24+XG4pID0+IHtcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgICAgdXJsOiAnL2FwaS9wcm9maWxlJyxcbiAgICB9O1xuXG4gICAgYXhpb3MoY29uZmlnKVxuICAgICAgICAudGhlbigoX3JlcykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFVzZXIoe30pKTtcbiAgICAgICAgICAgIGRvbmVDYignRGVsZXRlIEFjY291bnQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZXJyb3JDYihlcnJvclJlc3BvbnNlKGVyci5yZXNwb25zZS5kYXRhKSkpO1xufTtcbiIsImltcG9ydCB7IHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IEFjdGlvbiwgUHJvZmlsZVN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSBPYmplY3QuZnJlZXplPFByb2ZpbGVTdGF0ZT4oe1xuICAgIHByb2ZpbGU6IHtcbiAgICAgICAgcHJvZmlsZTogbnVsbCxcbiAgICAgICAgcHJvZmlsZXM6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOiBQcm9maWxlU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogUHJvZmlsZVN0YXRlID0+XG4gICAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuUFJPRklMRV9MT0FESU5HOiB7XG4gICAgICAgICAgICAgICAgZHJhZnQucHJvZmlsZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1BST0ZJTEU6IHtcbiAgICAgICAgICAgICAgICBkcmFmdC5wcm9maWxlLnByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICBkcmFmdC5wcm9maWxlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVTOiB7XG4gICAgICAgICAgICAgICAgZHJhZnQucHJvZmlsZS5wcm9maWxlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIGRyYWZ0LnByb2ZpbGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5DTEVBUl9DVVJSRU5UX1BST0ZJTEU6IHtcbiAgICAgICAgICAgICAgICBkcmFmdC5wcm9maWxlLnByb2ZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwL3JlZHVjZXInO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aC9yZWR1Y2VyJztcbmltcG9ydCBlcnJvcnNSZWR1Y2VyIGZyb20gJy4vZXJyb3JzL3JlZHVjZXInO1xuaW1wb3J0IHByb2ZpbGVSZWR1Y2VyIGZyb20gJy4vcHJvZmlsZS9yZWR1Y2VyJztcblxuY29uc3QgY3JlYXRlUm9vdFJlZHVjZXIgPSAoKSA9PlxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICAgIGFwcDogYXBwUmVkdWNlcixcbiAgICAgICAgYXV0aDogYXV0aFJlZHVjZXIsXG4gICAgICAgIGVycm9yczogZXJyb3JzUmVkdWNlcixcbiAgICAgICAgcHJvZmlsZTogcHJvZmlsZVJlZHVjZXIsXG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDZW50ZXJDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IEZpbHRlclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICB9XG4gICAgLmZpbHRlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEyMzM1OTQwODA0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAuc3dlZXQtbm90aSB7XG5cdFx0cGFkZGluZzogMnJlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRib3gtc2hhZG93OiAwcHggMnB4IDdweCByZ2JhKDYzLCA2MywgMTIyLCAwLjEpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0dG9wOiAxcmVtO1xuXHRcdHJpZ2h0OiAxcmVtO1xuXHRcdHotaW5kZXg6IDEwMDAwMDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG5cdFx0YW5pbWF0aW9uOiBmYWRlQWxlcnQgMnMgZm9yd2FyZHMgMSBsaW5lYXI7XG4gICAgICAgIGNvbG9yOiAjMTNEMkI4O1xuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAtNHB4O1xuXHRcdFx0bGVmdDogMDtcblx0XHR9XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0bGVmdDogMXJlbTtcblx0XHRcdHJpZ2h0OiAxcmVtO1xuXHRcdFx0dG9wOiAxcmVtO1xuXHRcdFx0cGFkZGluZzogMS41cmVtO1xuXHRcdH1cblx0fVxuXHRpLnN3ZWV0LW5vdGlfX2ljb24ge1xuXHRcdGZvbnQtc2l6ZTogNHJlbTtcblx0XHRtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcblx0XHRmbGV4LXNocmluazogMDtcblxuXHR9XG5cdC5zd2VldC1ub3RpX19jb250ZW50e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGNvbG9yOiAjNDc0NzQ3O1xuXHRcdGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xuXHR9XG5cdC5zd2VldC1ub3RpX190aXRsZSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cblx0LnN3ZWV0LW5vdGlfX21lc3NhZ2Uge1xuXHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cblx0fVxuXG5cdEBrZXlmcmFtZXMgZmFkZUFsZXJ0IHtcblx0XHQwJSB7XG5cdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdH1cblx0XHQxMCUsOTAlIHtcblx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdH1cblx0XHQxMDAlIHtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0fVxuXHR9XG5cblx0LmJhY2stdG8tdG9wIHtcblx0XHR3aWR0aDogNTBweDtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHJpZ2h0OiAzMHB4O1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHR6LWluZGV4OiAxMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODcwO1xuXHRcdGRpc3BsYXk6ZmxleDtcblx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0XHQmOmhvdmVyIHtcblx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0fVxuXHR9XG5cblxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBjb25zdCBMaW5rQ3VzdG9tID0gc3R5bGVkKExpbmspYFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmtDdXN0b21BY3RpdmUgPSBzdHlsZWQoTGluaylgXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5gO1xuIiwiZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICAgIHByaW1hcnk6ICcjMDhhZWVhJyxcbiAgICBzZWNvbmRhcnk6ICcjMTNEMkI4Jyxcbn07XG4iLCJpbXBvcnQgeyBkaXNwYXRjaFNldEN1cnJlbnRVc2VyIH0gZnJvbSAnc3RvcmUvYXV0aC9lZmZlY3RzJztcbmltcG9ydCB7IGNsZWFyQ3VycmVudFByb2ZpbGUgfSBmcm9tICdzdG9yZS9wcm9maWxlL2FjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaDogYW55LCBkYXRhOiBhbnkpID0+IHtcbiAgICBkaXNwYXRjaChkaXNwYXRjaFNldEN1cnJlbnRVc2VyKGRhdGEgYXMgYW55KSk7XG4gICAgZGlzcGF0Y2goY2xlYXJDdXJyZW50UHJvZmlsZSgpKTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBzZXRBdXRoVG9rZW4gPSAodG9rZW46IGFueSkgPT4ge1xuICAgIGlmICh0b2tlbikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldEF1dGhUb2tlbjtcbiIsImltcG9ydCB7IGRpc3BhdGNoU2V0Q3VycmVudFVzZXIgfSBmcm9tICdzdG9yZS9hdXRoL2VmZmVjdHMnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFByb2ZpbGUgfSBmcm9tICdzdG9yZS9wcm9maWxlL2VmZmVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2g6IGFueSwgZGVjb2RlZDogYW55KSA9PiB7XG4gICAgZGlzcGF0Y2goZGlzcGF0Y2hTZXRDdXJyZW50VXNlcihkZWNvZGVkIGFzIGFueSkpO1xuICAgIGRpc3BhdGNoKGdldEN1cnJlbnRQcm9maWxlKCkpO1xufTtcbiIsImNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IGFueSkgPT5cbiAgICB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApO1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZkE7QUFvQkE7QUFDQTtBQTFDQTtBQUNBOzs7QUFEQTtBQTJDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFWQTtBQWZBO0FBOEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBM2JBO0FBNGJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pkQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQU9BO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUE5R0E7QUErR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFXQTtBQUNBO0FBcEZBO0FBQ0E7QUFEQTtBQXFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQXJFQTtBQXNFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQVZBO0FBWEE7QUEyQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBL0RBO0FBZ0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUF0SEE7QUF1SEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBdkNBO0FBQ0E7QUFEQTtBQXdDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFwREE7QUFDQTs7O0FBREE7QUFxREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBekJBO0FBNEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7OztBQURBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQWdCQTtBQUNBO0FBM0JBO0FBQ0E7OztBQURBO0FBNEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBRkE7QUFOQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFuREE7QUFDQTs7O0FBREE7QUFvREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFsRUE7QUFDQTs7O0FBREE7QUFtRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQW1DQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFUQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBWUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFkQTtBQWdCQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQ0E7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUFBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWlCQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBMEJBO0FBNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9