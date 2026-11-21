cmake_minimum_required(VERSION 3.20)
project(shunter_cmake_starter LANGUAGES CXX)

enable_testing()
add_executable(starter main.cpp)
add_test(NAME starter_runs COMMAND starter)
