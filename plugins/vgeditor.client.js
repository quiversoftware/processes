import Vue from 'vue'
import VGEditor, {
  Flow,
  Mind,
  NodePanel,
  CanvasPanel,
  DetailPanel,
  Minimap,
  Toolbar,
  Command,
  NodeMenu,
  CanvasMenu,
  ContextMenu,
  ItemPanel,
  Item,
  RegisterEdge,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  EdgeMenu,
  GroupMenu,
  MultiMenu,
} from 'vg-editor'

Vue.component('flow', Flow)
Vue.component('mind', Mind)
Vue.component('node-panel', NodePanel)
Vue.component('detail-panel', DetailPanel)
Vue.component('canvas-panel', CanvasPanel)
Vue.component('v-g-editor', VGEditor)
Vue.component('minimap', Minimap)
Vue.component('toolbar', Toolbar)
Vue.component('command', Command)
Vue.component('node-menu', NodeMenu)
Vue.component('canvas-menu', CanvasMenu)
Vue.component('context-menu', ContextMenu)
Vue.component('item-panel', ItemPanel)
Vue.component('item', Item)
Vue.component('register-edge', RegisterEdge)
Vue.component('edge-panel', EdgePanel)
Vue.component('group-panel', GroupPanel)
Vue.component('multi-panel', MultiPanel)
Vue.component('edge-menu', EdgeMenu)
Vue.component('group-menu', GroupMenu)
Vue.component('multi-menu', MultiMenu)
Vue.use(VGEditor)
