(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(486)),o={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},c={id:"version-5.x/custom-navigators",title:"Custom navigators",description:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.",source:"@site/versioned_docs/version-5.x/custom-navigators.md",permalink:"/docs/custom-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/custom-navigators.md",version:"5.x",sidebar_label:"Custom navigators",sidebar:"version-5.x/docs",previous:{title:"Custom routers",permalink:"/docs/custom-routers"},next:{title:"Supported React Native versions",permalink:"/docs/supported-react-native-versions"}},s=[{value:"Built-in Navigators",id:"built-in-navigators",children:[]},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",children:[{value:"<code>useNavigationBuilder</code>",id:"usenavigationbuilder",children:[]},{value:"<code>createNavigatorFactory</code>",id:"createnavigatorfactory",children:[]}]},{value:"Type-checking navigators",id:"type-checking-navigators",children:[]},{value:"Extending Navigators",id:"extending-navigators",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."),Object(i.b)("p",null,"Under the hood, navigators are plain React components."),Object(i.b)("h2",{id:"built-in-navigators"},"Built-in Navigators"),Object(i.b)("p",null,"We include some commonly needed navigators such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/stack-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createStackNavigator"))," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/drawer-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createDrawerNavigator"))," - Provides a drawer that slides in from the left of the screen by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createBottomTabNavigator"))," - Renders a tab bar that lets the user switch between several screens."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/material-top-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialTopTabNavigator"))," - Renders tab view which lets the user switch between several screens using swipe gesture or the tab bar."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/material-bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialBottomTabNavigator"))," - Renders tab view which lets the user switch between several screens using swipe gesture or the tab bar.")),Object(i.b)("h2",{id:"api-for-building-custom-navigators"},"API for building custom navigators"),Object(i.b)("p",null,"A navigator bundles a router and a view which takes the navigation state and decides how to render it. We export a ",Object(i.b)("inlineCode",{parentName:"p"},"useNavigationBuilder")," hook to build custom navigators that integrate with rest of React Navigation."),Object(i.b)("h3",{id:"usenavigationbuilder"},Object(i.b)("inlineCode",{parentName:"h3"},"useNavigationBuilder")),Object(i.b)("p",null,"This hook allows a component to hook into React Navigation. It accepts the following arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"createRouter")," - A factory method which returns a router object (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"StackRouter"),", ",Object(i.b)("inlineCode",{parentName:"p"},"TabRouter"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"options")," - Options for the hook and the router. The navigator should forward its props here so that user can provide props to configure the navigator. By default, the following options are accepted:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"children")," (required) - The ",Object(i.b)("inlineCode",{parentName:"li"},"children")," prop should contain route configurations as ",Object(i.b)("inlineCode",{parentName:"li"},"Screen")," components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screenOptions")," - The ",Object(i.b)("inlineCode",{parentName:"li"},"screenOptions")," prop should contain default options for all of the screens."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The ",Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," prop determines the screen to focus on initial render. This prop is forwarded to the router.")),Object(i.b)("p",{parentName:"li"},"If any other options are passed here, they'll be forwarded to the router."))),Object(i.b)("p",null,"The hook returns an object with following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"state")," - The navigation state for the navigator. The component can take this state and decide how to render it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"navigation")," - The navigation object containing various helper methods for the navigator to manipulate the navigation state. This isn't the same as the navigation object for the screen and includes some helpers such as ",Object(i.b)("inlineCode",{parentName:"p"},"emit")," to emit events to the screens.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"descriptors")," - This is an object containing descriptors for each route with the route keys as its properties. The descriptor for a route can be accessed by ",Object(i.b)("inlineCode",{parentName:"p"},"descriptors[route.key]"),". Each descriptor contains the following properties:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation")," - The navigation prop for the screen. You don't need to pass this to the screen manually. But it's useful if we're rendering components outside the screen that need to receive ",Object(i.b)("inlineCode",{parentName:"li"},"navigation")," prop as well, such as a header component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," - A getter which returns the options such as ",Object(i.b)("inlineCode",{parentName:"li"},"title")," for the screen if they are specified."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"render")," - A function which can be used to render the actual screen. Calling ",Object(i.b)("inlineCode",{parentName:"li"},"descriptors[route.key].render()")," will return a React element containing the screen content. It's important to use this method to render a screen, otherwise any child navigators won't be connected to the navigation tree properly.")))),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport {\n  NavigationHelpersContext\n  useNavigationBuilder,\n  TabRouter,\n  TabActions,\n} from '@react-navigation/native';\n\nfunction TabNavigator({\n  initialRouteName,\n  children,\n  screenOptions,\n  tabBarStyle,\n  contentStyle,\n}) {\n  const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {\n    children,\n    screenOptions,\n    initialRouteName,\n  });\n\n  return (\n    <NavigationHelpersContext.Provider value={navigation}>\n      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>\n        {state.routes.map(route => (\n          <TouchableOpacity\n            key={route.key}\n            onPress={() => {\n              const event = navigation.emit({\n                type: 'tabPress',\n                target: route.key,\n                canPreventDefault: true,\n              });\n\n              if (!event.defaultPrevented) {\n                navigation.dispatch({\n                  ...TabActions.jumpTo(route.name),\n                  target: state.key,\n                });\n              }\n            }}\n            style={{ flex: 1 }}\n          >\n            <Text>{descriptors[route.key].options.title || route.name}</Text>\n          </TouchableOpacity>\n        ))}\n      </View>\n      <View style={[{ flex: 1 }, contentStyle]}>\n        {descriptors[state.routes[state.index].key].render()}\n      </View>\n    </NavigationHelpersContext.Provider>\n  );\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," object for navigators also has an ",Object(i.b)("inlineCode",{parentName:"p"},"emit")," method to emit custom events to the child screens. The usage looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigation.emit({\n  type: 'transitionStart',\n  data: { blurring: false },\n  target: route.key,\n});\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"data")," is available under the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," property in the ",Object(i.b)("inlineCode",{parentName:"p"},"event")," object, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"event.data"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"target")," property determines the screen that will receive the event. If the ",Object(i.b)("inlineCode",{parentName:"p"},"target")," property is omitted, the event is dispatched to all screens in the navigator."),Object(i.b)("h3",{id:"createnavigatorfactory"},Object(i.b)("inlineCode",{parentName:"h3"},"createNavigatorFactory")),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"createNavigatorFactory")," function is used to create a function that will ",Object(i.b)("inlineCode",{parentName:"p"},"Navigator")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," pair. Custom navigators need to wrap the navigator component in ",Object(i.b)("inlineCode",{parentName:"p"},"createNavigatorFactory")," before exporting."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {\n  useNavigationBuilder,\n  createNavigatorFactory,\n} from '@react-navigation/native';\n\n// ...\n\nexport const createMyNavigator = createNavigatorFactory(TabNavigator);\n")),Object(i.b)("p",null,"Then it can be used like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { createMyNavigator } from \'./myNavigator\';\n\nconst My = createMyNavigator();\n\nfunction App() {\n  return (\n    <My.Navigator>\n      <My.Screen name="Home" component={HomeScreen} />\n      <My.Screen name="Feed" component={FeedScreen} />\n    </My.Navigator>\n  )\n}\n')),Object(i.b)("h2",{id:"type-checking-navigators"},"Type-checking navigators"),Object(i.b)("p",null,"To type-check navigators, we need to provide 3 types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type of the props accepted by the view"),Object(i.b)("li",{parentName:"ul"},"Type of supported screen options"),Object(i.b)("li",{parentName:"ul"},"A map of event types emitted by the navigator")),Object(i.b)("p",null,"For example, to type-check our custom tab navigator, we can do something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport { StyleProp, ViewStyle } from 'react-native';\nimport {\n  useNavigationBuilder,\n  DefaultNavigatorOptions,\n  TabRouter,\n  TabActions,\n  TabRouterOptions,\n  TabNavigationState,\n} from '@react-navigation/native';\n\n// Props accepted by the view\ntype TabNavigationConfig = {\n  tabBarStyle: StyleProp<ViewStyle>;\n  contentStyle: StyleProp<ViewStyle>;\n};\n\n// Supported screen options\ntype TabNavigationOptions = {\n  title?: string;\n};\n\n// Map of events and the type of data (in event.data)\ntype TabNavigationEventMap = {\n  tabPress: { isAlreadyFocused: boolean };\n};\n\n// The props accepted by the component is a combination of 3 things\ntype Props = DefaultNavigatorOptions<TabNavigationOptions> &\n  TabRouterOptions &\n  TabNavigationConfig;\n\nfunction TabNavigator({\n  initialRouteName,\n  children,\n  screenOptions,\n  tabBarStyle,\n  contentStyle,\n}: Props) {\n  const { state, navigation, descriptors } = useNavigationBuilder<\n    TabNavigationState,\n    TabRouterOptions,\n    TabNavigationOptions,\n    TabNavigationEventMap\n  >(TabRouter, {\n    children,\n    screenOptions,\n    initialRouteName,\n  });\n\n  return (\n    <React.Fragment>\n      <View style={[{ flexDirection: 'row' }, tabBarStyle]}>\n        {state.routes.map(route => (\n          <TouchableOpacity\n            key={route.key}\n            onPress={() => {\n              const event = navigation.emit({\n                type: 'tabPress',\n                target: route.key,\n                data: {\n                  isAlreadyFocused: route.key === state.routes[state.index].key,\n                },\n              });\n\n              if (!event.defaultPrevented) {\n                navigation.dispatch({\n                  ...TabActions.jumpTo(route.name),\n                  target: state.key,\n                });\n              }\n            }}\n            style={{ flex: 1 }}\n          >\n            <Text>{descriptors[route.key].options.title || route.name}</Text>\n          </TouchableOpacity>\n        ))}\n      </View>\n      <View style={[{ flex: 1 }, contentStyle]}>\n        {descriptors[state.routes[state.index].key].render()}\n      </View>\n    </React.Fragment>\n  );\n}\n\nexport default createNavigatorFactory<\n  TabNavigationOptions,\n  typeof TabNavigator\n>(TabNavigator);\n")),Object(i.b)("h2",{id:"extending-navigators"},"Extending Navigators"),Object(i.b)("p",null,"All of the built-in navigators export their views, which we can reuse and build additional functionality on top of them. For example, if we want to re-build the bottom tab navigator, we need the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport {\n  useNavigationBuilder,\n  createNavigatorFactory,\n  TabRouter,\n} from '@react-navigation/native';\nimport { BottomTabView } from '@react-navigation/bottom-tabs';\n\nfunction BottomTabNavigator({\n  initialRouteName,\n  backBehavior,\n  children,\n  screenOptions,\n  ...rest\n}) {\n  const { state, descriptors, navigation } = useNavigationBuilder(TabRouter, {\n    initialRouteName,\n    backBehavior,\n    children,\n    screenOptions,\n  });\n\n  return (\n    <BottomTabView\n      {...rest}\n      state={state}\n      navigation={navigation}\n      descriptors={descriptors}\n    />\n  );\n}\n\nexport default createNavigatorFactory(BottomTabNavigator);\n")),Object(i.b)("p",null,"Now, we can customize it to add additional functionality or change the behavior. For example, use a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-routers"}),"custom router")," instead of the default ",Object(i.b)("inlineCode",{parentName:"p"},"TabRouter"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import MyRouter from './MyRouter';\n\n// ...\n\nconst { state, descriptors, navigation } = useNavigationBuilder(MyRouter, {\n  initialRouteName,\n  backBehavior,\n  children,\n  screenOptions,\n});\n\n// ...\n")))}p.isMDXComponent=!0},486:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);