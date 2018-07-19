<template lang="pug">
  nav.navbar.is-dark.is-fixed-top.top-bar
    .navbar-brand.is-hidden-desktop
      .navbar-burger.burger.mobile-menu.is-hidden-desktop(@click='toggleMobileMenu', v-bind:class="{'is-active': visible}")
        span
        span
        span
      //- navbar-burger
      a.navbar-item(href="")
        img(src='~assets/images/logo.png', alt='Digital Reign')
      //- a
      .navbar-burger.burger.menu-drop(data-target="navbarExampleTransparentExample", @click="toggleNavbar()", v-bind:class="{'is-active': isActive}")
        i.fa.fa-user-circle
      //- navbar-burger
    //- navbar-brand
    #navbarExampleTransparentExample.navbar-menu(v-bind:class="{'is-active': isActive}")

      user-type

      .navbar-end
        a.navbar-item.badge-icon(href="", data-counter="0")
          .is-hidden-desktop Messages
          i.fas.fa-envelope.is-hidden-touch
        //- a
        a.navbar-item.badge-icon(href="", data-counter="0")
          .is-hidden-desktop Notifications
          i.fas.fa-exclamation-triangle.is-hidden-touch
        //- a
        .navbar-item.has-dropdown.is-hoverable(v-if="haveLoginservice")
          a.navbar-link(href="")
            i.fas.fa-user-circle
            | &nbsp; {{username}}
          //- a
          .navbar-dropdown.is-boxed.is-right
            router-link.navbar-item(to="/secure/profile")
              | Profile
            //- a
            a.navbar-item(href="")
              | Feedback / Contact Us
            //- a
            hr.navbar-divider
            a.navbar-item(@click="doLogout")
              | Log Out
            //- router-link
          //- navbar-dropdown
        //- navbar-item
      //- navbar-end
    //- navbar-menu
  //- nav
</template>

<script>
import UserTypeMenu from '~/components/UserTypeMenu.vue'
export default {
  components: {
    'user-type': UserTypeMenu
  },
  data: function() {
    return {
      isActive: false
    }
  },
  props: ['visible'],
  computed: {
    haveLoginservice: function () {
      if (this.$loginservice) {
        return true
      }
      return false
    },
    username: function () {
      console.log(`$loginservice is`, this.$loginservice)
      // console.log(`username is`, this.$loginservice.username)
      if (this.$loginservice && this.$loginservice.user) {
        return this.$loginservice.user.fullname
      }
      return 'YARP'
    }
  },
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    },
    toggleMobileMenu: function() {
      this.$emit('update:visible', !this.visible)
    },
    doLogout: function () {
      this.$authservice.logout()
      this.$router.push('/')
    },
  }
}
</script>

<style>

</style>
