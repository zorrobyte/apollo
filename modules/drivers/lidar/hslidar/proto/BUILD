## Auto generated by `proto_build_generator.py`
load("//tools:apollo_package.bzl", "apollo_package")
load("//tools/proto:proto.bzl", "proto_library")

package(default_visibility = ["//visibility:public"])

proto_library(
    name = "hesai_proto",
    srcs = [
        "hesai.proto"
    ],
    deps = [
        "//modules/common_msgs/basic_msgs:header_proto",
    ],
)

proto_library(
    name = "hesai_config_proto",
    srcs = [
        "hesai_config.proto"
    ],
    deps = [
        ":hesai_proto",
        "//modules/drivers/lidar/common/proto:lidar_config_base_proto",
    ],
)

apollo_package()