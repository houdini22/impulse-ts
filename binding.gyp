{
  "targets": [
    {
      "include_dirs": ["/usr/local/cuda/include", "/usr/local/include"],
      "library_dirs": ["/usr/local/lib"],
      "libraries": ["-lcuda", "-lcudart"],
      "target_name": "impulseTsToolkit",
      "sources": ["src/cpp/bindings.cpp", "src/cpp/matrix.cu"]
    }
  ]
}
