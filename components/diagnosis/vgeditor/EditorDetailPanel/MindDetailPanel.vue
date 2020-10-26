<template>
  <detail-panel>
    <template v-slot="{ status }">
      <node-panel :status="status">
        <detail-form type="node" />
      </node-panel>
      <canvas-panel :status="status">
        <!-- todo -->
      </canvas-panel>
    </template>
  </detail-panel>
</template>

<script>
import DetailForm from '@/components/diagnosis/vgeditor/EditorDetailPanel/DetailForm'

export default {
  name: 'MindDetailPanel',
  components: {
    DetailForm
  }
}
</script>
