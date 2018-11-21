var overflow = new Vue({
  el: "#question-wrapper",
  data: {
    show: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    show8: false
  }
});

var register = new Vue({
  el: "#register-form",
  data: {
    show: true,
    isActive: true,
    password: "",
    password2: "",
    password3: "",
    password4: "",
    passwordFieldType: "password",
    passwordFieldType2: "password",
    passwordFieldType3: "password",
    passwordFieldType4: "password",

    errors: [],
    email: null,
    password: null,
    password2: null
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    switchVisibility2() {
      this.passwordFieldType2 =
        this.passwordFieldType2 === "password" ? "text" : "password";
    },
    switchVisibility3() {
      this.passwordFieldType3 =
        this.passwordFieldType3 === "password" ? "text" : "password";
    },
    switchVisibility4() {
      this.passwordFieldType4 =
        this.passwordFieldType4 === "password" ? "text" : "password";
    },

    checkForm: function(e) {
      if (this.email && this.password && this.password2) {
        return true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push("You need to write your email");
      }
      if (!this.password) {
        this.errors.push("You need to write your password");
      }
      if (!this.password2) {
        this.errors.push("You need repeat your password.");
      }

      e.preventDefault();
    }
  }
});

var overflow = new Vue({
  el: "#text-overflow",
  data: {
    show: false
  }
});

$.fn.extend({
  toggleText: function(a, b) {
    if (this.html() == a) {
      this.html(b);
    } else {
      this.html(a);
    }
  }
});

// registration game
var register_game = new Vue({
  el: "#register-game",
  data: {
    password4: "",
    password5: "",
    passwordFieldType4: "password",
    passwordFieldType5: "password"
  },
  methods: {
    switchVisibility4() {
      this.passwordFieldType4 =
        this.passwordFieldType4 === "password" ? "text" : "password";
    },
    switchVisibility5() {
      this.passwordFieldType5 =
        this.passwordFieldType5 === "password" ? "text" : "password";
    }
  }
});

var changeCurrency = new Vue({
  el: "#chooseCurrency",
  data: {
    title: "BTC"
  }
});

var register_password = new Vue({
  el: "#register-password",
  data: {
    password: "",
    passwordFieldType: "password"
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
});

//settings (change password and registration)
var settings = new Vue({
  el: "#openModalSettings",
  data: {
    show: true,
    isActive: true,
    changed_password_succsess: true,
    password: "",
    passwordFieldType: "password"
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
});
// export default {
//   data() {
//     return {
//       show: true,
//       isActive: true,
//       changed_password_succsess: true,
//       password: "",
//       passwordFieldType: "password"
//     };
//   },
//   methods: {
//     switchVisibility() {
//       this.passwordFieldType =
//         this.passwordFieldType === "password" ? "text" : "password";
//     }
//   }
// };
