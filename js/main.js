const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tabItem Function :
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to a selected tab
    this.classList.add('tab-border');
    // Use Item from DOM:
    const tabContentItemId = document.querySelector(`#${this.id}-content`)
    // Addig show class to item:
    tabContentItemId.classList.add('show');
}
function removeBorder(){
    tabItems.forEach( item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach( item => item.classList.remove('show'));
}
// Tab Click listener:
tabItems.forEach( item => item.addEventListener('click', selectItem));