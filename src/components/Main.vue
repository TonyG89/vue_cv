<template>
  <v-main>
    <h1>Frontend Web Developer</h1>
    <v-container fluid class="bg-red">
      <v-row>
        <v-col cols="12">
          <v-card class="header-card" dark>
            <v-img :src="photoUrl" height="200"></v-img>
            <v-card-title class="display-1 white--text"
              >интересы-хобби:</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
      <TextBlock title="hobby" :data="hobby" />
      <TextBlock title="Education" :data="hobby" />
      <TextBlock title="Work Experience" :data="hobby" />

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="contact-card" dark>
            <v-card-title class="white--text">Theory & Practice</v-card-title>
            <v-card-text class="white--text">
              блок про литерату, курсы
            </v-card-text>
            <v-card-text class="white--text">
              мое портфолию ссылка на его.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="contact-card" dark>
            <v-card-title class="white--text">Work Experience</v-card-title>
            <v-card-text class="white--text"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="about-card" dark>
            <v-card-title class="white--text">Обо мне</v-card-title>
            <v-card-text class="white--text">
              <p>
                Здесь можете рассказать кратко о себе, вашем опыте и интересах.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Другие разделы резюме -->
    </v-container>
  </v-main>
</template>

<script setup>
import TextBlock from "./blocks/TextBlock.vue";
import { hobby } from "@/data";
</script>

<style>
/* Стили как ранее */

/* Анимации и движения */
.header-card {
  background-color: #333333;
  text-align: center;
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-card,
.about-card,
.education-card,
.experience-card,
.skills-card,
.hobbies-card {
  animation: slideInUp 1s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
