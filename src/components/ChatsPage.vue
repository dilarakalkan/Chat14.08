<template>
  <div style="height: 100vh">
    <PrettyChatWindow
      :projectId="projectId"
      :username="username"
      :secret="secret"
    />
  </div>
</template>

<style>
.ce-new-chat-button {
  width: 32px;
  position: relative;
  bottom: 22px;
}
</style>

<script>
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { applyReactInVue } from "veaury";
import globalVariables from "@/utils/globalVariables";
export default {
  setup(){
    const {viteChateEnginePrivateKey,viteChateEngineProjectId} = globalVariables()
  },
  data() {
    return {
      projectId: "4c6c09ce-a8e4-40c2-9ef5-f5d0b571c687",
    };
  },
  components: {
    PrettyChatWindow: applyReactInVue(PrettyChatWindow),
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
};
</script>