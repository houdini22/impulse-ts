{
  "targets": [
    {
      "include_dirs": ["/usr/local/cuda/include", "/usr/local/include"],
      "library_dirs": ["/usr/local/lib"],
      "libraries": ["-lcuda", "-lcudart"],
      "target_name": "impulseTsToolkit",
      "sources": ["src/cpp/bindings.cpp"],
      'cflags': ['-msse', '-msse2'],
      'cflags_cc': ['-msse', '-msse2']
    }
  ]
}
