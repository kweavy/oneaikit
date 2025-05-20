import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Article } from "@/types/supabase";

async function getArticles() {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(6);

  if (error) throw error;
  return articles as Article[];
}

export default async function Dashboard() {
  const articles = await getArticles();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Latest News
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay up-to-date with our latest insights, updates, and news about AI tools and technology.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id}>
              <Link href={`/articles/${article.slug}`}>
                <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    {article.og_image ? (
                      <Image
                        src={article.og_image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {new Date(article.published_at!).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}