import MembersProj from "../texts/portugues/MembersProj.js";
import MembersProjEN from "../texts/english/MembersProj"

let membersp = MembersProj.sort(function(a, b) {
  // 1) active first than inactive
  let crit_active = (a.lab.active - b.lab.active) * -1;
  if (crit_active !== 0) {
    return crit_active;
  }
  // 2) member first than associate
  let crit_member = (a.belong - b.belong) * -1;
  if (crit_member !== 0) {
    return crit_member;
  }
  // 3) an predefined order set by the field 'order'
  let crit_order = 0;
  if (a.order !== undefined || b.order !== undefined) {
    if (a.order === undefined) {
      return 1;
    } else if (b.order === undefined) {
      return -1;
    } else {
      crit_order = a.order - b.order;
      if (crit_order !== 0) {
        return crit_order;
      }
    }
  }
  // 4) order names alphabetically
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  } else {
    return 1;
  }
});

export class filterMembersProj {
  constructor() {}

  byKey(key) {
    let idx = membersp.findIndex(function(item) {
      return item.key == key;
    });
    return membersp[idx].name;
  }

  byArea(area) {
    return membersp.filter(function(item) {
      return item.lab.area == area && item.belong == true;
    });
  }

  byAreaCurrent(area) {
    return membersp.filter(function(item) {
      return (
        item.lab.area == area && item.belong == true && item.lab.active == true
      );
    });
  }

  byAreaLeft(area) {
    return membersp.filter(function(item) {
      return (
        item.lab.area == area && item.belong == true && item.lab.active == false
      );
    });
  }
}