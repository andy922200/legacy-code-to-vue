<template>
  <form @submit.prevent="insertMovie">
    <div class="form-group">
      <label for="input-title-ch">Title in Chinese</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="form.title_ch"
        id="input-title-ch"
        placeholder="金牌特務"
      />
      <small class="form-text text-muted">請輸入最多 50 個中文字</small>
      <small
        class="errorMessage"
        :class="title_ch_validated === false ? 'errorMessage--show' : ''"
      >
        只接受中文字，並請檢查輸入長度，
      </small>
    </div>
    <div class="form-group">
      <label for="input-title-eng">Title in English</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="form.title_eng"
        id="input-title-eng"
        placeholder="Kingsman"
      />
      <small class="form-text text-muted"
        >最多100字，不接受 $, %, ^, &, *</small
      >
      <small
        class="errorMessage"
        :class="title_eng_validated === false ? 'errorMessage--show' : ''"
      >
        請檢查輸入長度，和刪除不接受的字元
      </small>
    </div>
    <div class="form-group">
      <label for="input-intro">Intro</label>
      <input
        type="text"
        class="form-control"
        v-model.trim="form.intro"
        id="input-intro"
        placeholder="是一部於2015年上映，由英國、美國合拍的諜報喜劇動作片..."
      />
      <small class="form-text text-muted">請以 "Intro" 開頭，10~250字</small>
      <small
        class="errorMessage"
        :class="title_intro_validated === false ? 'errorMessage--show' : ''"
      >
        請檢查是否合乎條件
      </small>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="isLoading">
      Insert
    </button>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MovieInputForm",
  data() {
    return {
      form: {
        title_ch: "",
        title_eng: "",
        intro: ""
      },
      title_ch_validated: null,
      title_eng_validated: null,
      title_intro_validated: null
    };
  },
  computed: {
    ...mapGetters("movies", ["movies", "isLoading"]),
    isValidForm() {
      return (
        this.title_ch_validated &&
        this.title_eng_validated &&
        this.title_intro_validated
      );
    }
  },
  methods: {
    ...mapMutations("movies", ["setMovies"]),

    async insertMovie() {
      try {
        let validatedForm = await this.validationCheck();

        if (validatedForm) {
          let objectForDB = {
            ch_name: this.form.title_ch,
            eng_name: this.form.title_eng,
            intro: this.form.intro
          };

          this.setMovies([objectForDB, ...this.movies]);
          this.formReset();
        }
      } catch (err) {
        console.log(err);
      }
    },

    async validationCheck() {
      try {
        const title_ch_rule = /[\u4E00-\u9FFF]{1,50}/;
        const title_eng_rule = /[0-9A-Za-z\s]{1,100}/;
        const alphabets_rule = /[A-Za-z]/;
        const specialCharacters_rule = /[`~!@#$^&*()=|{}':;',\[\].<>/?~！@#￥……&*（）――|{}【】‘；：”“'。，、？]/;
        const title_intro_rule = /^Intro.{5,250}/;
        let processedIntroInput = this.form.intro
          .split("")
          .filter(d => d !== " ")
          .join("");

        this.title_ch_validated =
          title_ch_rule.test(this.form.title_ch) &&
          !alphabets_rule.test(this.form.title_ch);
        this.title_eng_validated =
          title_eng_rule.test(this.form.title_eng) &&
          !specialCharacters_rule.test(this.form.title_eng);
        this.title_intro_validated = title_intro_rule.test(processedIntroInput);

        return this.isValidForm ? true : false;
      } catch (err) {
        console.log(err);
        return false;
      }
    },

    formReset() {
      let formKeys = Object.keys(this.form);
      formKeys.forEach(key => (this.form[key] = ""));
      this.title_ch_validated = null;
      this.title_eng_validated = null;
      this.title_intro_validated = null;
    }
  }
};
</script>
