System.register(["../common", "./node", "../utility"], function (_export) {
  var Common, Node, Utility, _prototypeProperties, _get, _inherits, _classCallCheck, TreeNode;

  return {
    setters: [function (_common) {
      Common = _common.Common;
    }, function (_node) {
      Node = _node.Node;
    }, function (_utility) {
      Utility = _utility.Utility;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TreeNode = _export("TreeNode", (function (Node) {
        function TreeNode(common, element, utility) {
          _classCallCheck(this, TreeNode);

          _get(Object.getPrototypeOf(TreeNode.prototype), "constructor", this).call(this);
          this.common = common;
          this.element = element;
          this.utility = utility;

          this.node = null;
          this.node_id = null;
          this.url = "";
          this.title = null;
          this.collapsed = null;
          this.children = null;
          this.metaRef = null;
          this.meta = null;
        }

        _inherits(TreeNode, Node);

        _prototypeProperties(TreeNode, {
          inject: {
            value: function inject() {
              return [Common, Element, Utility];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(model) {
              // console.log("activate, model.node_id:"+model.node_id)
              this.node_id = model.node_id;
              this.parentVM = model.parentVM;
              this.rootVM = model.parentVM.rootVM;
              this.parentVM.addChildVM(this, this.node_id);

              var that = this;
              this.nodeRef = this.rootVM.dirNodesRef.child(this.node_id);
              this.nodeRef.on("value", function (dataSnapshot) {
                if (that.rootVM.editing) return;
                console.log("this.nodeRef.on('value', model.node_id:" + model.node_id);
                var data = dataSnapshot.val();
                console.log(data);
                if (!data) return;
                that.node = data;
                if (!that.node.children) that.node.children = [];
              });

              this.metaRef = this.rootVM.filesRef.child(this.node_id).child("meta");
              this.metaRef.on("value", function (dataSnapshot) {
                if (that.rootVM.editing) return;
                var data = dataSnapshot.val();
                if (!data) return;
                that.meta = data;
                console.log(that.meta);
                if ("tree" == that.meta.type || "flat" == that.meta.type) {
                  that.url = "./#" + that.meta.type + "/online/" + that.meta.id + "/root";
                } else if ("mosaic" == that.meta.type) {
                  that.url = "./#" + that.meta.type + "/online/" + that.meta.id;
                }
              });
            },
            writable: true,
            configurable: true
          },
          cut: {
            value: function cut() {
              this.rootVM.selectedVMList.push(this);
              this.rootVM.cut();
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              if ("directory" != this.meta.type) {
                return;
              }this.meta.collapsed = !this.meta.collapsed;
              this.rootVM.filesRef.child(this.node.id).child("/meta/collapsed").set(this.meta.collapsed);
            },
            writable: true,
            configurable: true
          }
        });

        return TreeNode;
      })(Node));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVfbWFuYWdlci90cmVlLW5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLE1BQU0sRUFDTixJQUFJLEVBQ0osT0FBTywwREFFRixRQUFROzs7O0FBSmIsWUFBTSxXQUFOLE1BQU07O0FBQ04sVUFBSSxTQUFKLElBQUk7O0FBQ0osYUFBTyxZQUFQLE9BQU87Ozs7Ozs7Ozs7Ozs7QUFFRixjQUFRLGtDQUFTLElBQUk7QUFFckIsaUJBRkEsUUFBUSxDQUVQLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTztnQ0FGekIsUUFBUTs7QUFHakIscUNBSFMsUUFBUSw2Q0FHVDtBQUNSLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUV2QixjQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztBQUNsQixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixjQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNkLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO0FBQ2pCLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztrQkFoQlUsUUFBUSxFQUFTLElBQUk7OzZCQUFyQixRQUFRO0FBQ1osZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFpQnRELGtCQUFRO21CQUFBLGtCQUFDLEtBQUssRUFBQzs7QUFFYixrQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdCLGtCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDL0Isa0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDcEMsa0JBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdDLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsa0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsWUFBWSxFQUFFO0FBQzlDLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU87QUFDaEMsdUJBQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3BFLG9CQUFJLElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDOUIsdUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakIsb0JBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUNsQixvQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsb0JBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7ZUFDbEQsQ0FBQyxDQUFDOztBQUVILGtCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RFLGtCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxZQUFZLEVBQUU7QUFDOUMsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTztBQUNoQyxvQkFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlCLG9CQUFJLENBQUMsSUFBSSxFQUFFLE9BQU87QUFDbEIsb0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLHVCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QixvQkFBSSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3hELHNCQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO2lCQUN6RSxNQUFNLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3JDLHNCQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQy9EO2VBQ0YsQ0FBQyxDQUFDO2FBQ0o7Ozs7QUFFRCxhQUFHO21CQUFBLGVBQUc7QUFDSixrQkFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLGtCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ25COzs7O0FBRUQsZ0JBQU07bUJBQUEsa0JBQUc7QUFDUCxrQkFBSSxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO0FBQUUsdUJBQU87ZUFBQSxBQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzNDLGtCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1Rjs7Ozs7O2VBN0RVLFFBQVE7U0FBUyxJQUFJIiwiZmlsZSI6ImZpbGVfbWFuYWdlci90cmVlLW5vZGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==