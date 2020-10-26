<!--https://chrisshen93.github.io/VGEditor/-->
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet height="650px">
          <v-g-editor style="height: 600px" class="demo">
            <v-row>
              <v-col cols="12" md="12">
                <div class="demo-chart__header">
                  <flow-toolbar />
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" md="1">
                <div class="demo-chart__sidebar">
                  <flow-item-panel />
                </div>
              </v-col>
              <v-divider vertical class="mx-0"></v-divider>
              <v-col cols="12" md="8" class="mx-0 px-0">
                <div class="demo-chart__container">
                  <div class="demo-chart__main" style="height: 550px">
                    <flow
                      :data="flowChartData"
                      :on-node-click="handleNodeClick"
                      :graph="{ mode: 'readOnly' }"
                    />
                  </div>
                </div>
              </v-col>
              <v-divider vertical class="mx-0"></v-divider>
              <v-col>
                <v-row>
                  <v-col cols="12" md="11">
                    <flow-detail-panel />
                  </v-col>
                </v-row>
                <div class="demo-chart__panel">
                  <editor-minimap />
                </div>
              </v-col>
            </v-row>
            <flow-context-menu />
            <register-edge
              name="custom-polyline"
              extend="flow-polyline"
              :config="customEdgeConfig"
            />
          </v-g-editor>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FlowToolbar } from '@/components/diagnosis/vgeditor/EditorToolbar'
import { FlowDetailPanel } from '@/components/diagnosis/vgeditor/EditorDetailPanel'
import EditorMinimap from '@/components/diagnosis/vgeditor/EditorMinimap'
import { FlowContextMenu } from '@/components/diagnosis/vgeditor/EditorContextMenu'
import { FlowItemPanel } from '@/components/diagnosis/vgeditor/EditorItemPanel'

const data = {}

export default {
  name: 'Ishikawa',
  components: {
    FlowDetailPanel,
    FlowToolbar,
    FlowContextMenu,
    EditorMinimap,
    FlowItemPanel,
  },
  data() {
    return {
      flowChartData: data,
      customEdgeConfig: {
        getActivedStyle(item) {
          return {
            lineWidth: 3,
          }
        },
        getSelectedStyle(item) {
          return {
            lineWidth: 3,
          }
        },
      },
    }
  },
  methods: {
    handleNodeClick(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
  },
}
</script>
