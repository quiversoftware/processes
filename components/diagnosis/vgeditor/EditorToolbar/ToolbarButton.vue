<template>
  <command :name="command">
    <icon :type="iconType" />
  </command>
</template>

<script>
import Icon from '../Icon'

export default {
  name: 'ToolbarButton',

  components: {
    Icon,
  },

  // eslint-disable-next-line vue/require-prop-types
  props: ['command', 'icon', 'text'],

  computed: {
    iconType() {
      return `icon-${this.icon || this.command}`
    },
  },
}
</script>
