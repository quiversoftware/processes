<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet height="650px">
          <v-g-editor style="height: 600px;" class="demo">
            <v-row>
              <v-col cols="12" md="12">
                <div class="demo-chart__header">
                  <mind-toolbar />
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" md="9" class="mx-0 px-0">
                <div class="demo-chart__container">
                  <div class="demo-chart__main" style="height: 550px;">
                    <mind :data="data" :onNodeClick="handleNodeClick" />
                  </div>
                </div>
              </v-col>
              <v-divider vertical class="mx-0"></v-divider>
              <v-col>
                <v-row>
                  <v-col cols="12" md="11">
                    <mind-detail-panel />
                  </v-col>
                </v-row>
                <div class="demo-chart__panel">
                  <editor-minimap />
                </div>
              </v-col>
            </v-row>
            <mind-context-menu />
          </v-g-editor>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { MindToolbar } from '@/components/diagnosis/vgeditor/EditorToolbar'
import { MindDetailPanel } from '@/components/diagnosis/vgeditor/EditorDetailPanel'
import EditorMinimap from '@/components/diagnosis/vgeditor/EditorMinimap'
import { MindContextMenu } from '@/components/diagnosis/vgeditor/EditorContextMenu'

const data = {
  roots: [
    {
      label: 'Problema',
      children: [
        {
          label: '',
          side: 'left',
          children: [
            {
              label: 'Hombre',
              side: 'left',
              children: [
                {
                  label: 'factor 1',
                },
                {
                  label: 'factor 2',
                },
              ],
            },
            {
              label: 'Máquina',
              side: 'left',
              children: [
                {
                  label: 'factor 1',
                },
                {
                  label: 'factor 2',
                },
              ],
            },
            {
              label: 'Entorno',
              side: 'left',
              children: [
                {
                  label: 'factor 1',
                  children: [
                    {
                      label: 'factor 1.1',
                    },
                    {
                      label: 'factor 1.2',
                    },
                    {
                      label: 'factor 1.3',
                    },
                  ],
                },
                {
                  label: 'factor 2',
                },
                {
                  label: 'factor 3',
                },
              ],
            },
            {
              label: 'Material',
              side: 'left',
              children: [
                {
                  label: 'factor 1',
                },
              ],
            },
            {
              label: 'Método',
              side: 'left',
              children: [
                {
                  label: 'factor 1',
                },
                {
                  label: 'factor 2',
                  children: [
                    {
                      label: 'factor 2.2',
                    },
                  ],
                },
                {
                  label: 'factor 3',
                },
                {
                  label: 'factor 4',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
export default {
  name: 'test',
  data() {
    return { data }
  },
  methods: {
    handleNodeClick(e) {
      console.log(e)
    },
  },
  components: {
    MindDetailPanel,
    MindToolbar,
    MindContextMenu,
    EditorMinimap,
  },
}
</script>
