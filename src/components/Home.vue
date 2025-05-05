<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title>DevPrompt</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md text-center">
        <h2>Sem ideia para um projeto ?</h2>
        <p>Vamos ajudar a encontrar um que combine com suas habilidades e interesse.</p>
        <div class="row">
          <div class="col-6"><q-input v-model="text" label="Área de Interesse" :dense="dense" /></div>
          <div class="col-6"><q-input v-model="text" label="Tecnologias Favoritas" :dense="dense" /></div>
        </div>
        <q-btn color="primary" label="Gerar Ideia" />

        <div class="q-pa-sm row items-start"> <!-- Remover q-gutter-sm -->
          <div class="col-4 q-px-sm">
          <q-card class="my-card">
            <q-card-section>
              <div class="row">
                <div class="col-2">
                  Icon
                </div>
                <div class="col-10">
                  <b>Crie um aplicativo de lista de tarefas  com autenticação  de usuários</b>
                  <p>Uma aplicação para gerenciar tarefas com funcionalidade de autenticação para distintos usuários, usando autenticação JWT.</p>
                </div>
              </div>
            </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-px-sm">
            <q-card class="my-card">
              <q-card-section>
                <div class="row">
                  <div class="col-2">
                    Icon
                  </div>
                  <div class="col-10">
                    <b>Crie um aplicativo de lista de tarefas  com autenticação  de usuários</b>
                    <p>Uma aplicação para gerenciar tarefas com funcionalidade de autenticação para distintos usuários, usando autenticação JWT.</p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-px-sm">
            <q-card class="my-card">
              <q-card-section>
                <div class="row">
                  <div class="col-2">
                    Icon
                  </div>
                  <div class="col-10">
                    <b>Crie um aplicativo de lista de tarefas  com autenticação  de usuários</b>
                    <p>Uma aplicação para gerenciar tarefas com funcionalidade de autenticação para distintos usuários, usando autenticação JWT.</p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {

}
</script>