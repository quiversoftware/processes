<template>
  <detail-panel>
    <!-- vue 2.6.x -->
    <template v-slot="{ status }">
      <node-panel :status="status">
        <detail-form type="node" />
      </node-panel>
      <edge-panel :status="status">
        <detail-form type="edge" />
      </edge-panel>
      <group-panel :status="status">
        <detail-form type="group" />
      </group-panel>
      <multi-panel :status="status" />
      <canvas-panel :status="status" />
    </template>

    <!-- <template slot-scope="scope">
      <node-panel :status="scope.status">
        <detail-form type="node"/>
      </node-panel>
      <edge-panel :status="scope.status">
        <detail-form type="edge"/>
      </edge-panel>
      <group-panel :status="scope.status">
        <detail-form type="group"/>
      </group-panel>
      <multi-panel :status="scope.status"/>
      <canvas-panel :status="scope.status"/>
    </template> -->
  </detail-panel>
</template>

<script>
import DetailForm from '@/components/diagnosis/vgeditor/EditorDetailPanel/DetailForm'

export default {
  name: 'FlowDetailPanel',
  components: {
    DetailForm,
  },
}
</script>
