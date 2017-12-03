<template>
<div>
    <div @mouseover="mini = false" @mouseout="mini = true" v-if="!mobile">
      <v-navigation-drawer permanent light :mini-variant.sync="mini" fixed :stateless="left" app clipped >
            <template v-for="(item,i) in this.menu_items">
                <v-expansion-panel  v-if="item.child && !mini" :key="i">
                    <v-expansion-panel-content>
                        <div slot="header"><v-icon>{{item.icon}}</v-icon><span> {{item.name}}</span><v-icon class="right">keyboard_arrow_down</v-icon></div>
                        <v-card>
                            <v-card-text class="grey lighten-4" v-if="!mini">
                                <div class="expansion-panel__header" v-for="(child, cindex) in item.child" :key="cindex">
                                    <div>
                                        <v-icon>{{ child.icon }}</v-icon> {{ child.name }}
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <div v-else :key="i" class="expansion-panel__header">
                    <div>
                        <i class="material-icons icon">{{item.icon}}</i> <span v-show="!mini">{{ item.name }}</span>
                    </div>
                </div>
            </template>
      </v-navigation-drawer>
    </div>

    <v-navigation-drawer v-else left fixed :hide-overlay="true" touchless :stateless="left" v-model="left" app clipped>
      <template v-for="(item,i) in menu_items">
        <v-expansion-panel  v-if="item.child" :key="i">
          <v-expansion-panel-content>
              <div slot="header"><v-icon>{{item.icon}}</v-icon> {{item.name}}</div>
              <v-card>
                <v-card-text class="grey lighten-4">
                  <div class="expansion-panel__header" v-for="(child, cindex) in item.child" :key="cindex">
                    <div>
                      <i class="material-icons icon">{{ child.icon }}</i> {{ child.name }}
                    </div>
                  </div>
                </v-card-text>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <div v-else :key="i" class="expansion-panel__header">
          <div>
            <i class="material-icons icon">{{item.icon}}</i> {{ item.name }}
          </div>
        </div>

      </template>
    </v-navigation-drawer>
    
</div>
</template>

<script>
import menu_items from '../menu.js';
export default {
    name: 'main-menu',
    props: ['left'],
    data(){
        return {
            menu_items: menu_items,
            mobile: window.innerWidth <= 992,
            mini: true,
            //left: false
        }
    },
    methods: {
        changeMenu(left){
            if(!left){
                //this.$emit('left', left);
            }
        }
    },
    mounted(){
        //console.log(this.mini);
    },
    watch:{
        left: function(newVal, oldVal) {
            this.$emit('left', newVal);
        }
    }
}
    
</script>

<style>
.header__icon{
    display: none;
}
.expansion-panel__header:hover{
    background-color: #e5e5e5
}

</style>
