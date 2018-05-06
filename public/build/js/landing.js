windowSize();
showArticle(1);

function showArticle(articleID) {
    for (var i = 1; i <= 12; i++) {
        var x = document.getElementById(i);
        if (i === articleID) {
            x.style.display = 'block';
            if (document.body.clientWidth < 1024) {
                document.getElementById('sideNavigation').style.visibility = 'hidden';
            }
        } else {
            x.style.display = 'none';
        }
    }
    var rows = document.getElementById('smallTable').getElementsByTagName('tr').length;
    for (var i = 1; i <= rows; i++) {
        var x = document.getElementById("displayMoreData" + i);
        var y = document.getElementById("imgClickAndChange" + i);
        x.style.display = "none";
        y.src = "images/show-more-button.png";
        y.title = "Rodyti daugiau";
    }
}

function windowSize() {
    var x1 = document.body.clientWidth;
    var x2;
    if (x1 >= 1024) {
        if (document.getElementById('sideNavigation').style.width === '250px' || document.getElementById('sideNavigation').style.width === '') {
            x2 = 250;
        } else {
            x2 = 0;
        }
        var x3 = x1 - x2;
        document.getElementById('main').style.marginLeft = x2 + 'px';
        document.getElementById('main').style.width = x3 + 'px';
        document.getElementById('sideNavigation').style.visibility = 'visible';
    } else {
        document.getElementById('main').style.marginLeft = '0px';
        document.getElementById('main').style.width = x1 + 'px';
        document.getElementById('sideNavigation').style.visibility = 'hidden';
    }
}

function openNav() {
    var x1 = document.body.clientWidth;
    var x2;
    if (x1 >= 1024) {
        if (document.getElementById('sideNavigation').style.width === '250px' || document.getElementById('sideNavigation').style.width === '') {
            x2 = 0;
        } else {
            x2 = 250;
        }
        var x3 = x1 - x2;
        document.getElementById('main').style.marginLeft = x2 + 'px';
        document.getElementById('main').style.width = x3 + 'px';
        document.getElementById('sideNavigation').style.width = x2 + 'px';
    } else {
        document.getElementById('main').style.marginLeft = '0px';
        document.getElementById('main').style.width = x1 + 'px';
        document.getElementById('sideNavigation').style.width = '250px';
        document.getElementById('sideNavigation').style.visibility = 'visible';
    }
}

function addDocument() {
    var x = document.getElementById('newDocumentWindow');
    x.style.display = 'block';
}

function display() {
    var x = document.getElementById('newDocumentWindow');
    x.style.display = 'block';
}

function goBack() {
    var x = document.getElementById('newDocumentWindow');
    x.style.display = 'none';
}

function toggle(i) {
    var x = document.getElementById("displayMoreData" + i);
    var y = document.getElementById("imgClickAndChange" + i);
    if (x.style.display === "none" || x.style.display === '') {
        x.style.display = "table-row";
        y.src = "images/show-less-button.png";
        y.title = "Rodyti mažiau";
    } else {
        x.style.display = "none";
        y.src = "images/show-more-button.png";
        y.title = "Rodyti daugiau";
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTI5YjliYWI4NDE4YmUyMzAyNDgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xhbmRpbmcuanMiXSwibmFtZXMiOlsid2luZG93U2l6ZSIsInNob3dBcnRpY2xlIiwiYXJ0aWNsZUlEIiwiaSIsIngiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImNsaWVudFdpZHRoIiwidmlzaWJpbGl0eSIsInJvd3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsInkiLCJzcmMiLCJ0aXRsZSIsIngxIiwieDIiLCJ3aWR0aCIsIngzIiwibWFyZ2luTGVmdCIsIm9wZW5OYXYiLCJhZGREb2N1bWVudCIsImdvQmFjayIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBQTtBQUNBQyxZQUFZLENBQVo7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFDNUIsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLEtBQUssRUFBckIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQzFCLFlBQUlDLElBQUlDLFNBQVNDLGNBQVQsQ0FBd0JILENBQXhCLENBQVI7QUFDQSxZQUFJ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QyxDQUFSO0FBQ0EsUUFBSVksSUFBSVYsU0FBU0MsY0FBVCxDQUF3QixzQkFBc0JILENBQTlDLENBQVI7QUFDQSxRQUFJQyxFQUFFRyxLQUFGLENBQVFDLE9BQVIsS0FBb0IsTUFBcEIsSUFBOEJKLEVBQUVHLEtBQUYsQ0FBUUMsT0FBUixLQUFvQixFQUF0RCxFQUEwRDtBQUN0REosVUFBRUcsS0FBRixDQUFRQyxPQUFSLEdBQWtCLFdBQWxCO0FBQ0FPLFVBQUVDLEdBQUYsR0FBUSw2QkFBUjtBQUNBRCxVQUFFRSxLQUFGLEdBQVUsZUFBVjtBQUNILEtBSkQsTUFJTztBQUNIYixVQUFFRyxLQUFGLENBQVFDLE9BQVIsR0FBa0IsTUFBbEI7QUFDQU8sVUFBRUMsR0FBRixHQUFRLDZCQUFSO0FBQ0FELFVBQUVFLEtBQUYsR0FBVSxnQkFBVjtBQUNIO0FBQ0osQyIsImZpbGUiOiJqcy9sYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvbGFuZGluZy5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MjliOWJhYjg0MThiZTIzMDI0OCIsIndpbmRvd1NpemUoKTtcbnNob3dBcnRpY2xlKDEpO1xuXG5mdW5jdGlvbiBzaG93QXJ0aWNsZShhcnRpY2xlSUQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XG4gICAgICAgIGlmIChpID09PSBhcnRpY2xlSUQpIHtcbiAgICAgICAgICAgIHguc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU5hdmlnYXRpb24nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hbGxUYWJsZScpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0cicpLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSByb3dzOyBpKyspIHtcbiAgICAgICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlNb3JlRGF0YVwiICsgaSk7XG4gICAgICAgIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdDbGlja0FuZENoYW5nZVwiICsgaSk7XG4gICAgICAgIHguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB5LnNyYyA9IFwiaW1hZ2VzL3Nob3ctbW9yZS1idXR0b24ucG5nXCI7XG4gICAgICAgIHkudGl0bGUgPSBcIlJvZHl0aSBkYXVnaWF1XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aW5kb3dTaXplKCkge1xuICAgIHZhciB4MSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdmFyIHgyO1xuICAgIGlmICh4MSA+PSAxMDI0KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU5hdmlnYXRpb24nKS5zdHlsZS53aWR0aCA9PT0gJzI1MHB4JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU5hdmlnYXRpb24nKS5zdHlsZS53aWR0aCA9PT0gJycpIHtcbiAgICAgICAgICAgIHgyID0gMjUwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeDIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4MyA9IHgxIC0geDI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUubWFyZ2luTGVmdCA9IHgyICsgJ3B4JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS53aWR0aCA9IHgzICsgJ3B4JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVOYXZpZ2F0aW9uJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLm1hcmdpbkxlZnQgPSAnMHB4JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS53aWR0aCA9IHgxICsgJ3B4JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVOYXZpZ2F0aW9uJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb3Blbk5hdigpIHtcbiAgICB2YXIgeDEgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHZhciB4MjtcbiAgICBpZiAoeDEgPj0gMTAyNCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVOYXZpZ2F0aW9uJykuc3R5bGUud2lkdGggPT09ICcyNTBweCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVOYXZpZ2F0aW9uJykuc3R5bGUud2lkdGggPT09ICcnKSB7XG4gICAgICAgICAgICB4MiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4MiA9IDI1MDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeDMgPSB4MSAtIHgyO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLm1hcmdpbkxlZnQgPSB4MiArICdweCc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUud2lkdGggPSB4MyArICdweCc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTmF2aWdhdGlvbicpLnN0eWxlLndpZHRoID0geDIgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUubWFyZ2luTGVmdCA9ICcwcHgnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLndpZHRoID0geDEgKyAncHgnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU5hdmlnYXRpb24nKS5zdHlsZS53aWR0aCA9ICcyNTBweCc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTmF2aWdhdGlvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGREb2N1bWVudCgpIHtcbiAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdEb2N1bWVudFdpbmRvdycpO1xuICAgIHguc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3RG9jdW1lbnRXaW5kb3cnKTtcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3RG9jdW1lbnRXaW5kb3cnKTtcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZShpKSB7XG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlNb3JlRGF0YVwiICsgaSk7XG4gICAgdmFyIHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ0NsaWNrQW5kQ2hhbmdlXCIgKyBpKTtcbiAgICBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fCB4LnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XG4gICAgICAgIHguc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XG4gICAgICAgIHkuc3JjID0gXCJpbWFnZXMvc2hvdy1sZXNzLWJ1dHRvbi5wbmdcIjtcbiAgICAgICAgeS50aXRsZSA9IFwiUm9keXRpIG1hxb5pYXVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgeS5zcmMgPSBcImltYWdlcy9zaG93LW1vcmUtYnV0dG9uLnBuZ1wiO1xuICAgICAgICB5LnRpdGxlID0gXCJSb2R5dGkgZGF1Z2lhdVwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbGFuZGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=