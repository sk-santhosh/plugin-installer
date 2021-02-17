import React, { Component } from "react";

class Index extends Component {
  render() {
    const { packages } = this.props;
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/stylesheets/tailwind.css" />
          <title>{this.props.title}</title>
        </head>
        <body className="container mx-auto p-10 bg-gray-200">
          <h1 className="text-2xl">{this.props.title}</h1>
          <div className="my-5 grid grid-cols-5 gap-2">
            {packages.map((p) => (
              <div className="shadow bg-white rounded">
                <h2 className="text-xl bg-blue-300 p-2 rounded-t">{p.name}</h2>
                <div className="p-2 text-right">
                  <p className="text-sm italic mb-2">{p.install}</p>
                  {p.installed ? (
                    <a
                      href={`/uninstall/${p.package}`}
                      className="outline-none focus:outline-none my-2 px-2 py-0.5 border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </a>
                  ) : (
                    <a
                      href={`/install/${p.package}`}
                      className="outline-none focus:outline-none my-2 px-2 py-0.5 border-2 border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white"
                    >
                      Install
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </body>
      </html>
    );
  }
}

export default Index;
