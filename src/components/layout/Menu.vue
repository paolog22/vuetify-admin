<template>
<div>
    <div @mouseover="mini = false" @mouseout="mini = true" v-if="!$store.state.isMobile">
      <v-navigation-drawer permanent light :mini-variant.sync="mini" fixed :stateless="left" app clipped >
            <template v-for="(item,i) in this.menu_items">
                <v-expansion-panel  v-if="item.child" :key="i">
                    <v-expansion-panel-content>
                        <div slot="header"><v-icon class="menu-icon">{{item.icon}}</v-icon><span v-if="!mini"> {{item.name}}</span><v-icon v-if="!mini" class="right">keyboard_arrow_down</v-icon></div>
                        <v-card>
                            <v-card-text class="grey lighten-4" v-if="!mini">
                                <div class="expansion-panel__header" v-for="(child, cindex) in item.child" :key="cindex">
                                    <router-link :to="child.link" tag="div">
                                        <v-icon>{{ child.icon }}</v-icon> {{ child.name }}
                                    </router-link>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <div v-else :key="i" class="expansion-panel__header">
                    <router-link :to="item.link" tag="div">
                        <v-icon class="menu-icon">{{item.icon}}</v-icon> <span v-show="!mini"> {{ item.name }}</span>
                    </router-link>
                </div>
            </template>
      </v-navigation-drawer>
    </div>

    <v-navigation-drawer v-else left fixed :hide-overlay="true" :stateless="left" v-model="$store.state.left_open" app clipped>
        <div class="expansion-panel__header">
            <div>
                {{$store.state.app_name}}
            </div>
        </div>
        <template v-for="(item,i) in menu_items">
        <v-expansion-panel  v-if="item.child" :key="i">
          <v-expansion-panel-content>
              <div slot="header"><v-icon>{{item.icon}}</v-icon> {{item.name}}</div>
              <v-card>
                <v-card-text class="grey lighten-4">
                  <div class="expansion-panel__header" v-for="(child, cindex) in item.child" :key="cindex">
                    <div>
                        <v-icon class="menu-icon">{{ child.icon }}</v-icon> {{ child.name }}
                    </div>
                  </div>
                </v-card-text>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <div v-else :key="i" class="expansion-panel__header">
          <div>
              <v-icon class="menu-icon">{{item.icon}}</v-icon> {{ item.name }}
          </div>
        </div>

      </template>
    </v-navigation-drawer>
    
</div>
</template>

<script>
import menu_items from '../../menu.js';
export default {
    name: 'main-menu',
    data(){
        return {
            menu_items: menu_items,
            mini: true,
            left: null,
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

.menu-icon{
    margin-left: 7px
}

</style>
