"use strict";

const Node = require("./node-08.test");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;

    return;
  }}
    function zipLists(ll1, ll2) {
        let zippList = new LinkedList();
        let list1Len = 0;
        let list2Len = 0;
        let list1Current = ll1.head;
        let ll2Current = ll2.head;
      
        while (list1Current) {
          list1Current = list1Current.next;
          list1Len++;
        }
        while (ll2Current) {
          ll2Current = ll2Current.next;
          list2Len++;
        }
      
        list1Current = ll1.head;
        ll2Current = ll2.head;
        let len = list1Len > list2Len ? list1Len : list2Len;
        while (len >= 0) {
          if (list1Current) {
            zippList.append(list1Current.value);
            list1Current = list1Current.next;
          }
          if (ll2Current) {
            zippList.append(ll2Current.value);
            ll2Current = ll2Current.next;
          }
          len--;
        }
      
        return zippList;
      }
      let list = new LinkedList();
      
      list.append("Alaa");
      list.append("Ghaidaa");
      list.append("Reem");
      
      let myList2 = new LinkedList();
      
      myList2.append("Alaa2");
      myList2.append("Ghaidaa2");
      myList2.append("Reem2");
      

      describe("LinkedList", () => {
        it("should create new LinkedList ", () => {
          let newList = new LinkedList();
          expect(newList.head).toBeNull();
        });

    it("should zipLists return zipped list if l1 length == l2", () => {
      let list1 = new LinkedList();
      list1.append(2);
      list1.append(3);
      let list2 = new LinkedList();
      list2.append(11);
      list2.append(21);
      expect(zipLists(list1, list2)).toEqual({
        head: {
          next: {
            next: { next: { next: null, value: 21 }, value: 3 },
            value: 11,
          },
          value: 2,
        },
      });
    });

    it("should zipLists return zipped list if l1 length != l2", () => {
        let list1 = new LinkedList();
        list1.append(2);
        list1.append(3);
        list1.append(4);
        let list2 = new LinkedList();
        list2.append(11);
        list2.append(21);
        expect(zipLists(list1, list2)).toEqual({
          head: {
            next: {
              next: {
                next: { next: { next: null, value: 4 }, value: 21 },
                value: 3,
              },
              value: 11,
            },
            value: 2,
          },
        });
      });
})