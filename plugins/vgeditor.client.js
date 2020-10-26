import Vue from 'vue'
import VGEditor, {
  Flow,
  Mind,
  NodePanel,
  CanvasPanel,
  DetailPanel
} from 'vg-editor'

Vue.component('flow', Flow)
Vue.component('mind', Mind)
Vue.component('node-panel', NodePanel)
Vue.component('detail-panel', DetailPanel)
Vue.component('canvas-panel', CanvasPanel)
Vue.component('v-g-editor', VGEditor)
Vue.use(VGEditor)
