//https://github.com/jakesgordon/javascript-state-machine?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
/*
function myFunction() {
  var fsm_0 = new StateMachine({
    init: 'solid',
    transitions: [
      { name: 'melt',     from: 'solid',  to: 'liquid' },
      { name: 'freeze',   from: 'liquid', to: 'solid'  },
      { name: 'vaporize', from: 'liquid', to: 'gas'    },
      { name: 'condense', from: 'gas',    to: 'liquid' }
    ],
    methods: {
      onMelt:     function() { console.log('I melted')    },
      onFreeze:   function() { console.log('I froze')     },
      onVaporize: function() { console.log('I vaporized') },
      onCondense: function() { console.log('I condensed') }
    }
  });
//  ... который создает объект со свойством текущего состояния:


//... методы перехода в другое состояние:

fsm.melt()
console.log(fsm_0.transitions())

//fsm.freeze()
//fsm.vaporize()
//fsm.condense()
//console.log(fsm.state)
//... методы наблюдателя, вызываемые автоматически во время жизненного цикла перехода:

onMelt()
onFreeze()
onVaporize()
onCondense()
//... вместе со следующими вспомогательными методами:

fsm.is(s) - вернуть истину, если состояние sявляется текущим состоянием
fsm.can(t) - вернуть true, если tвозможен переход из текущего состояния
fsm.cannot(t) - вернуть истину, если переход tне может произойти из текущего состояния
fsm.transitions() - вернуть список разрешенных переходов из текущего состояния
fsm.allTransitions() - вернуть список всех возможных переходов
fsm.allStates() - вернуть список всех возможных состояний
 
}
 */
//Параметры инициализации
/*

Явный переход инициализации
По умолчанию, если вы не укажете начальное состояние, конечный автомат будет в этом none состоянии,
никакие события жизненного цикла не будут запускаться во время построения,
и вам нужно будет предоставить явный переход для выхода из этого состояния:
*/
function Explicit_Init_Transition(){
 var startFsmOps={
    transitions: [
      { name: 'init', from: 'none', to: 'A' },
      { name: 'step', from: 'A',    to: 'B' },
      { name: 'step', from: 'B',    to: 'C' }
    ]
  }
 var fsm = new StateMachine(startFsmOps);
 var startState= fsm.state;    // 'none'
 console.log(fsm.state)
 if (fsm.state=='none'){
 fsm.init()}
 else{
 //
 }// 'init()' transition is fired explicitly
 console.log(fsm.state)
function Implicit_Init_Transition (){

}
  
  
}