#CG Staking Codebase


## Theme Impelementation

For Color applying, please define color first in theme/types.ts under colors type. Then implement under dark and light theme file colors. 


## State Implementation
please use state folder


## View Implementation
When we need to implement new View. We need to first define a folder under src->views folder. Then please create following hierarchy for each view. 

    ├───views
        ├───components <Define All Components>
        ├───index.ts
        ├───<View Name File>.tsx
        ├───types.tsx <Define All types used under this view>