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
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link(href="")
            i.fas.fa-user-circle
            | &nbsp;Rodan Luzuriaga
          //- a
          .navbar-dropdown.is-boxed.is-right
            a.navbar-item(href="")
              | Profile
            //- a
            a.navbar-item(href="")
              | Feedback / Contact Us
            //- a
            hr.navbar-divider
            router-link.navbar-item(to="/")
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
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    },
    toggleMobileMenu: function() {
      this.$emit('update:visible', !this.visible)
    },
  }
}
</script>

<style>

</style>
