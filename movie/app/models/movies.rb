class Movies
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'movies_developement',:user => "pguser", :password => "pguser")
    end

  # ===============================
  # PREPARED STATEMENTS
  # ===============================
  # create movies
  DB.prepare("create_movies",
    <<-SQL
      INSERT INTO movies (title, rating, year, recommend)
      VALUES ($1, $2, $3)
      RETURNING id, title, rating, year, recommend;
    SQL
  )

  # update movies
  DB.prepare("update_movies",
    <<-SQL
      UPDATE movies
      SET title = $2, rating = $3, year = $4, recommend = $5
      WHERE id = $1
      RETURNING id, title, rating, year, recommend;
    SQL
  )

  # ===============================
  # ROUTES
  # ===============================
  # index
  def self.all
    results = DB.exec("SELECT * FROM movies ORDER BY id ASC;")
    return results.map do |result|
      {
          "id" => result["id"].to_i,

      }
    end
  end

  # show
  def self.find(id)
    # query to find the movies
    results = DB.exec("SELECT * FROM movies WHERE id=#{id};")
    # if there are results, return the hash
    if !results.num_tuples.zero?
      return {
        "id" => results.first["id"].to_i,

      }

    else
      return {
        "error" => "no such movies, check the id!"
      }, status: 400
    end
  end


  def self.create(opts)
    results = DB.exec_prepared("create_movies", [opts["title"], opts["rating"], opts["year"],opts["recommend"]])
    return {
      "id" => results.first["id"].to_i,
        "year" => results.first["year"].to_i

    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM movies WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update(id, opts)
    results = DB.exec_prepared("update_movies", [id, opts["title"], opts["rating"], opts["year"],opts["recommend"]])
    return {
      "id" => results.first["id"].to_i,
      "year" => results.first["year"].to_i

    }
  end

end
