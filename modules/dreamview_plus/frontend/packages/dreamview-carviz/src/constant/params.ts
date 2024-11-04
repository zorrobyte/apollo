export const planningParams = {
    newMinInterval: 0.05,
    minInterval: 0.1,
    defaults: {
        width: 1.4,
    },
    pathProperties: {
        default: {
            width: 0.1,
            color: 16764501,
            opacity: 1,
            zOffset: 0.5,
            renderOrder: 0.3,
        },
        PIECEWISE_JERK_PATH_OPTIMIZER: {
            width: 0.2,
            color: 3580651,
            opacity: 1,
            zOffset: 0.5,
            renderOrder: 0.4,
        },
        'planning_path_boundary_1_regular/pullover': {
            width: 0.1,
            color: 16764501,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.5,
        },
        'candidate_path_regular/pullover': {
            width: 0.1,
            color: 16764501,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.5,
        },
        'planning_path_boundary_2_regular/pullover': {
            width: 0.1,
            color: 16764501,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.5,
        },
        'planning_path_boundary_1_regular/self': {
            style: 'dash',
            width: 0.1,
            color: 15793920,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.6,
        },
        'candidate_path_regular/self': {
            // style: 'dash',
            width: 0.1,
            color: 15793920,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.6,
        },
        'planning_path_boundary_2_regular/self': {
            style: 'dash',
            width: 0.1,
            color: 15793920,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.6,
        },
        'planning_path_boundary_1_fallback/self': {
            style: 'dash',
            width: 0.1,
            color: 15793920,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.6,
        },
        'candidate_path_fallback/self': {
            // style: 'dash',
            width: 0.1,
            color: 15793920,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.6,
        },
        'planning_path_boundary_2_fallback/self': {
            style: 'dash',
            width: 0.1,
            color: 15793920,
            opacity: 1,
            zOffset: 0.4,
            renderOrder: 0.6,
        },
        DpPolyPathOptimizer: {
            width: 0.4,
            color: 9305268,
            opacity: 0.6,
            zOffset: 0.3,
            renderOrder: 0.7,
        },
        'Planning PathData': {
            width: 0.4,
            color: 16764501,
            opacity: 0.6,
            zOffset: 0.3,
            renderOrder: 0.7,
        },
        trajectory: {
            width: 0.8,
            color: 119233,
            opacity: 0.65,
            zOffset: 0.2,
            renderOrder: 0.8,
        },
        planning_reference_line: {
            width: 0.8,
            color: 14177878,
            opacity: 0.7,
            zOffset: 0,
            renderOrder: 0.9,
        },
        follow_planning_line: {
            width: 0.8,
            color: 119233,
            opacity: 0.65,
            zOffset: 0,
        },
    },
};