let mutations = {
    left_menu(state, option) {
        if (option == "open") {
            state.left_open = true
        } else if (option == "close") {
            state.left_open = false
        } else if (option == "toggle") {
            state.left_open = !state.left_open
        }
        if (state.left_open) {
            document.getElementsByTagName("body")[0].classList.remove("left-hidden")
        } else {
            document.getElementsByTagName("body")[0].classList.add("left-hidden")
        }
    },
    right_menu(state, option) {
        if (option == "open") {
            state.right_open = true
        } else if (option == "close") {
            state.right_open = false
        } else if (option == "toggle") {
            state.right_open = !state.left_open
        }
        if (state.right_open) {
            document.getElementsByTagName("body")[0].classList.remove("left-hidden")
        } else {
            document.getElementsByTagName("body")[0].classList.add("left-hidden")
        }
    },
    routeChange(state, loader) {
        if (loader == "start") {
            state.preloader = true
        } else if (loader == "end") {
            state.preloader = false
        }
    },
    addevent(state, event) {
        let id = state.cal_events[state.cal_events.length - 1] ? state.cal_events[state.cal_events.length - 1].id + 1 : 0;
        state.cal_events.push({ id: id, title: event.evtname, start: event.date.from, end: event.date.to })
    },
    editevent(state, event) {
        let evt = JSON.parse(JSON.stringify(event));
        let id_index = "";
        state.cal_events.forEach(function(currentValue, index) {
            if (currentValue.id == evt.id) {
                id_index = index;
            }
        });
        state.cal_events[id_index].title = evt.title;
        state.cal_events[id_index].start = evt.start;
        state.cal_events[id_index].end = evt.end;
    },
    removeevent(state, id) {
        let id_index = "";
        state.cal_events.forEach(function(currentValue, index) {
            if (currentValue.id == id.evtid) {
                id_index = index;
            }
        });
        state.cal_events.splice(id_index, 1);
    },
    userData(state){
        state.roles = JSON.parse(localStorage.getItem('roles'));
        state.permissions = JSON.parse(localStorage.getItem('permissions'));
        state.user.name = localStorage.getItem('name');
    }
}
export default mutations
